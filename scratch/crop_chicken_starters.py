import os
from PIL import Image

# Setup paths
brain_path = r"C:\Users\Shaik Irfan\.gemini\antigravity-ide\brain\6be732e3-9358-40a6-baa9-7feebdd34f8c"
src_img_path = os.path.join(brain_path, "media__1780164115445.jpg")
output_dir = r"f:\projects\Bawarchi\public\images\dishes"

# Load source image
if not os.path.exists(src_img_path):
    print(f"Error: Source image {src_img_path} not found!")
    exit(1)
    
img = Image.open(src_img_path)
print(f"Loaded source image {src_img_path} (Size: {img.size})")

# Target dimensions for premium visual consistency
TARGET_SIZE = (400, 300) # 4:3 aspect ratio

# Define cells for Row 3 and Row 4
# Row 3 (Y: 487 to 653, 5 columns)
# Row 4 (Y: 722 to 890, 4 columns)
crop_definitions = {
    # Row 3 Starters
    "chicken_65.png": (0, 487, 204.8, 653, 5),
    "chicken_chilly.png": (204.8, 487, 409.6, 653, 5),
    "chicken_manchuria.png": (409.6, 487, 614.4, 653, 5),
    "chicken_majestic.png": (614.4, 487, 819.2, 653, 5),
    "pepper_chicken.png": (819.2, 487, 1024, 653, 5),
    
    # Row 4 Starters
    "chicken_555_special.png": (0, 722, 256, 890, 4),
    "chicken_roast.png": (256, 722, 512, 890, 4),
    "chicken_lollipop.png": (512, 722, 768, 890, 4),
    "chicken_drum_stick.png": (768, 722, 1024, 890, 4),
}

# Staging preview directory
preview_dir = os.path.join(output_dir, "preview_starters")
os.makedirs(preview_dir, exist_ok=True)

print("Starting cropping process...")
for filename, (x1_raw, y1_raw, x2_raw, y2_raw, total_cols) in crop_definitions.items():
    # Add small margins/padding to avoid vertical divider lines or label backgrounds
    # Pad 2 pixels horizontally, and Y starts 2 pixels inside
    x1 = x1_raw + 2
    x2 = x2_raw - 2
    y1 = y1_raw + 2
    y2 = y2_raw - 2
    
    width = x2 - x1
    height = y2 - y1
    
    # Center-crop based on 4:3 target aspect ratio
    cell_aspect = width / height
    target_aspect = 4.0 / 3.0
    
    if cell_aspect > target_aspect:
        # Cell is too wide (e.g. Row 4), reduce crop width centered
        crop_w = height * target_aspect
        center_x = (x1 + x2) / 2.0
        crop_x1 = int(center_x - crop_w / 2.0)
        crop_x2 = int(center_x + crop_w / 2.0)
        crop_y1 = int(y1)
        crop_y2 = int(y2)
    else:
        # Cell is too tall (e.g. Row 3), reduce crop height centered
        crop_h = width / target_aspect
        center_y = (y1 + y2) / 2.0
        crop_x1 = int(x1)
        crop_x2 = int(x2)
        crop_y1 = int(center_y - crop_h / 2.0)
        crop_y2 = int(center_y + crop_h / 2.0)
        
    # Perform crop
    crop_box = (crop_x1, crop_y1, crop_x2, crop_y2)
    cropped_img = img.crop(crop_box)
    
    # Resize to TARGET_SIZE using LANCZOS for high quality
    resized_img = cropped_img.resize(TARGET_SIZE, Image.Resampling.LANCZOS)
    
    # Save to preview staging folder
    preview_path = os.path.join(preview_dir, filename)
    resized_img.save(preview_path, "PNG")
    print(f"Cropped {filename}: Box={crop_box} -> Resized to {resized_img.size} -> Saved to {preview_path}")

print("Cropping completed. Ready for preview!")
