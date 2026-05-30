import os
from PIL import Image

# Path to uploaded image and output directory
image_path = r"C:\Users\Shaik Irfan\.gemini\antigravity-ide\brain\6be732e3-9358-40a6-baa9-7feebdd34f8c\media__1780163033139.jpg"
output_dir = r"f:\projects\Bawarchi\public\images\dishes"

img = Image.open(image_path)

# Panel boundaries from analysis:
# Header line Y = 34, Middle horizontal Y = 351, Bottom Y = 682
# Vertical splits: X = 343, X = 676
# Text label margins start around Y = 312 (top row) and Y = 626 (bottom row)

crops = {
    "chicken_biryani.png": (0, 34, 340, 312),
    "chicken_fry_piece_biryani.png": (346, 34, 673, 312),
    "special_boneless_chicken_biryani.png": (679, 34, 1024, 312),
    "mutton_biryani.png": (0, 351, 340, 626),
    "chicken_family_pack.png": (346, 351, 673, 626),
    "mutton_family_pack.png": (679, 351, 1024, 626)
}

print("Cropping and saving images:")
for filename, box in crops.items():
    cropped_img = img.crop(box)
    target_path = os.path.join(output_dir, filename)
    cropped_img.save(target_path, "PNG")
    print(f"Saved {filename} to {target_path} (Size: {cropped_img.size})")

print("All 6 images cropped and saved successfully!")
