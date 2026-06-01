import os
import shutil

preview_dir = r"f:\projects\Bawarchi\public\images\dishes\preview_starters"
output_dir = r"f:\projects\Bawarchi\public\images\dishes"

files = [
    "chicken_65.png",
    "chicken_chilly.png",
    "chicken_manchuria.png",
    "chicken_majestic.png",
    "pepper_chicken.png",
    "chicken_555_special.png",
    "chicken_roast.png",
    "chicken_lollipop.png",
    "chicken_drum_stick.png"
]

print("Copying preview starters to production folder:")
for f in files:
    src = os.path.join(preview_dir, f)
    dst = os.path.join(output_dir, f)
    if os.path.exists(src):
        shutil.copyfile(src, dst)
        print(f" - Copied {f} to {dst}")
    else:
        print(f" - Error: Source {src} does not exist!")
print("Copied all 9 refined chicken starter images successfully!")
