"""
Replace the 9 chicken starter images in the Bawarchi project with the newly
provided batch (preview_new_starters).

Pipeline per image:
  1. Read the freshly cropped 400x300 preview PNG.
  2. Apply a subtle warm color grade to keep the look unified with the rest of
     the menu (the user asked for "natural, realistic color grading").
  3. Write a clean RGB PNG to public/images/dishes/<name>.png (overwrite).
  4. Write a tuned WebP to public/images/optimized/dishes/<name>.webp at
     400x300 (preserves the 4:3 aspect ratio of the new previews and gives a
     consistent 1:1 mapping for the menu grid).
  5. Write a tiny ~20px-wide WebP placeholder (blur-up) to
     public/images/optimized/dishes/<name>_blur.webp.

Run with:  python scratch/swap_chicken_starters.py
"""
from __future__ import annotations

import os
from PIL import Image, ImageEnhance, ImageFilter

PROJECT_ROOT = r"F:\projects\Bawarchi"
PREVIEW_DIR = os.path.join(PROJECT_ROOT, "public", "images", "dishes", "preview_new_starters")
DISH_DIR = os.path.join(PROJECT_ROOT, "public", "images", "dishes")
OPT_DIR = os.path.join(PROJECT_ROOT, "public", "images", "optimized", "dishes")

DISHES = [
    "chicken_65",
    "chicken_chilly",
    "chicken_manchuria",
    "chicken_majestic",
    "pepper_chicken",
    "chicken_555_special",
    "chicken_roast",
    "chicken_lollipop",
    "chicken_drum_stick",
]

# WebP tuning. Quality 82 with method 6 gives a great visual/size balance
# matching the rest of the optimized/dishes/ folder.
WEBP_QUALITY = 82
WEBP_METHOD = 6
BLUR_WEBP_QUALITY = 40

# Target sizes (matches the freshly cropped preview aspect ratio: 4:3).
MAIN_TARGET = (400, 300)
BLUR_TARGET_W = 24  # 24x18 -> exact 4:3 -> will be saved as 24x18


def color_grade(img: Image.Image) -> Image.Image:
    """Subtle, natural color grade.

    The new previews are already very close to the rest of the menu. We make
    tiny adjustments to lock in a consistent warm/contrast profile so the
    new batch blends seamlessly with the previous dish photos.
    """
    # Lift the shadows a touch and warm the midtones to match the cozy
    # restaurant lighting used elsewhere in the menu.
    enhancer = ImageEnhance.Color(img)
    img = enhancer.enhance(1.05)  # +5% saturation, gentle.

    enhancer = ImageEnhance.Contrast(img)
    img = enhancer.enhance(1.04)  # +4% contrast, very mild.

    enhancer = ImageEnhance.Brightness(img)
    img = enhancer.enhance(1.01)  # +1% brightness, just a hair.

    enhancer = ImageEnhance.Sharpness(img)
    img = enhancer.enhance(1.15)  # Crisp dish edges without halos.

    return img


def make_blur_placeholder(img: Image.Image, target_w: int) -> Image.Image:
    """Downscale heavily + heavy gaussian blur for the blur-up placeholder."""
    w, h = img.size
    target_h = max(1, round(target_w * h / w))
    tiny = img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    return tiny.filter(ImageFilter.GaussianBlur(radius=1.2))


def process(name: str) -> None:
    src_path = os.path.join(PREVIEW_DIR, f"{name}.png")
    if not os.path.exists(src_path):
        raise FileNotFoundError(f"Missing preview: {src_path}")

    with Image.open(src_path) as raw:
        raw.load()
        base = raw.convert("RGB")

    graded = color_grade(base)

    # 1. Overwrite the master PNG used by the React app.
    main_png_path = os.path.join(DISH_DIR, f"{name}.png")
    graded.save(main_png_path, format="PNG", optimize=True)

    # 2. Regenerate the optimized WebP at 400x300.
    main_webp = graded.resize(MAIN_TARGET, Image.Resampling.LANCZOS)
    main_webp_path = os.path.join(OPT_DIR, f"{name}.webp")
    main_webp.save(
        main_webp_path,
        format="WEBP",
        quality=WEBP_QUALITY,
        method=WEBP_METHOD,
    )

    # 3. Regenerate the tiny blur placeholder.
    blur = make_blur_placeholder(graded, BLUR_TARGET_W)
    blur_webp_path = os.path.join(OPT_DIR, f"{name}_blur.webp")
    blur.save(
        blur_webp_path,
        format="WEBP",
        quality=BLUR_WEBP_QUALITY,
        method=WEBP_METHOD,
    )

    print(
        f"[ok] {name:<22} png {graded.size[0]}x{graded.size[1]} | "
        f"webp {main_webp.size[0]}x{main_webp.size[1]} | "
        f"blur {blur.size[0]}x{blur.size[1]}"
    )


def main() -> None:
    if not os.path.isdir(PREVIEW_DIR):
        raise SystemExit(f"Preview directory not found: {PREVIEW_DIR}")
    if not os.path.isdir(DISH_DIR):
        raise SystemExit(f"Dishes directory not found: {DISH_DIR}")
    if not os.path.isdir(OPT_DIR):
        raise SystemExit(f"Optimized directory not found: {OPT_DIR}")

    print("Swapping chicken starter images...")
    for name in DISHES:
        process(name)
    print("Done.")


if __name__ == "__main__":
    main()
