import os
from PIL import Image, ImageDraw

# Setup paths
src_img_path = r"C:\Users\Shaik Irfan\.gemini\antigravity-ide\brain\f3e52822-3393-4c9c-a33e-62f3e509c453\media__1780303882903.jpg"
output_dir = r"f:\projects\Bawarchi\public\images\dishes"
preview_dir = os.path.join(output_dir, "preview_new_starters")
os.makedirs(preview_dir, exist_ok=True)

# Load source image
if not os.path.exists(src_img_path):
    print(f"Error: Source image {src_img_path} not found!")
    exit(1)
    
img = Image.open(src_img_path)
width, height = img.size
print(f"Loaded source image {src_img_path} (Size: {width}x{height})")

# Target dimensions
TARGET_SIZE = (400, 300)

# Define X centers and Y ranges for the 3x3 layout
x_centers = [174, 512, 850]
y_ranges = [
    (61, 226),  # Row 1
    (270, 435), # Row 2
    (478, 643)  # Row 3
]

crop_map = [
    # Row 1
    ("chicken_65.png", 0, 0),
    ("chicken_chilly.png", 0, 1),
    ("chicken_manchuria.png", 0, 2),
    # Row 2
    ("chicken_majestic.png", 1, 0),
    ("pepper_chicken.png", 1, 1),
    ("chicken_555_special.png", 1, 2),
    # Row 3
    ("chicken_roast.png", 2, 0),
    ("chicken_lollipop.png", 2, 1),
    ("chicken_drum_stick.png", 2, 2)
]

# We will also create an annotated version of the grid showing the crop boxes
annotated_grid = img.copy()
draw = ImageDraw.Draw(annotated_grid)

for filename, row_idx, col_idx in crop_map:
    x_center = x_centers[col_idx]
    y1, y2 = y_ranges[row_idx]
    h = y2 - y1
    w = int(h * 4.0 / 3.0) # 4:3 aspect ratio
    
    x1 = x_center - (w // 2)
    x2 = x_center + (w // 2)
    
    # Perform crop
    crop_box = (x1, y1, x2, y2)
    cropped_img = img.crop(crop_box)
    resized_img = cropped_img.resize(TARGET_SIZE, Image.Resampling.LANCZOS)
    
    # Save crop
    dest_path = os.path.join(preview_dir, filename)
    resized_img.save(dest_path, "PNG")
    print(f"Cropped {filename} from {crop_box} -> Saved to {dest_path}")
    
    # Draw the crop box on the annotated grid
    draw.rectangle([x1, y1, x2, y2], outline="green", width=2)
    draw.text((x1 + 5, y1 + 5), filename.split(".")[0], fill="green")

# Save annotated grid for inspection
annotated_grid_path = os.path.join(output_dir, "inspect_crops_3x3.png")
annotated_grid.save(annotated_grid_path)
print(f"Saved annotated preview grid to {annotated_grid_path}")
