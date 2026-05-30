import os
from PIL import Image

# Path to brain folder and output directory
brain_path = r"C:\Users\Shaik Irfan\.gemini\antigravity-ide\brain\6be732e3-9358-40a6-baa9-7feebdd34f8c"
output_dir = r"f:\projects\Bawarchi\public\images\dishes"

# Load the three images
img_a = Image.open(os.path.join(brain_path, "media__1780163357055.jpg")) # Size: 1024x682
img_b = Image.open(os.path.join(brain_path, "media__1780163382117.jpg")) # Size: 1024x682
img_c = Image.open(os.path.join(brain_path, "media__1780163491951.jpg")) # Size: 1024x819

crops = {
    # === Image A Crops ===
    # Row 1 (4 columns) - Y: 34 to 308
    "paneer_butter_masala.png": (img_a, (2, 34, 256, 308)),
    "butter_chicken.png": (img_a, (260, 34, 508, 308)),
    # Chicken 65 is also in Image B, let's crop it from Image A first
    "chicken_65.png": (img_a, (512, 34, 762, 308)),
    "tandoori_chicken.png": (img_a, (766, 34, 1022, 308)),
    
    # Row 2 (5 columns) - Y: 348 to 643
    "veg_corn_soup.png": (img_a, (2, 348, 203, 643)),
    "veg_hot_and_sour_soup.png": (img_a, (207, 348, 400, 643)),
    "veg_canton_soup.png": (img_a, (404, 348, 614, 643)),
    "veg_clear_soup.png": (img_a, (618, 348, 813, 643)),
    "veg_garlic_soup.png": (img_a, (817, 348, 1022, 643)),
    
    # === Image B Crops ===
    # Row 1 (5 columns) - Y: 34 to 301
    "chicken_corn_soup.png": (img_b, (2, 34, 210, 301)),
    "chicken_hot_soup.png": (img_b, (214, 34, 411, 301)),
    "chicken_canton_soup.png": (img_b, (415, 34, 611, 301)),
    "chicken_clear_soup.png": (img_b, (615, 34, 812, 301)),
    "chicken_garlic_soup.png": (img_b, (816, 34, 1022, 301)),
    
    # Row 2 (5 columns) - Y: 331 to 646
    "green_salad.png": (img_b, (2, 331, 210, 646)),
    # Chicken 65 is here, we will overwrite it with this starters version which is very fresh
    "chicken_65.png": (img_b, (214, 331, 411, 646)),
    "chicken_chilly.png": (img_b, (415, 331, 611, 646)),
    "chicken_manchuria.png": (img_b, (615, 331, 812, 646)),
    "chicken_majestic.png": (img_b, (816, 331, 1022, 646)),
    
    # === Image C Crops ===
    # Row 1 (4 columns) - Y: 2 to 217
    "pepper_chicken.png": (img_c, (2, 2, 250, 217)),
    "chicken_555_special.png": (img_c, (254, 2, 506, 217)),
    "chicken_roast.png": (img_c, (510, 2, 762, 217)),
    "chicken_lollipop.png": (img_c, (766, 2, 1022, 217)),
    
    # Row 2 (4 columns) - Y: 252 to 490
    "chicken_drum_stick.png": (img_c, (2, 252, 250, 490)),
    "chicken_special_handi.png": (img_c, (254, 252, 506, 490)),
    
    # Row 3 (4 columns) - Y: 532 to 779
    "grill_chicken.png": (img_c, (766, 532, 1022, 779)),
}

print("Cropping and saving Batch 2:")
for filename, (src_img, box) in crops.items():
    cropped_img = src_img.crop(box)
    target_path = os.path.join(output_dir, filename)
    cropped_img.save(target_path, "PNG")
    print(f"Saved {filename} to {target_path} (Size: {cropped_img.size})")

print("All 22 images cropped and saved successfully!")
