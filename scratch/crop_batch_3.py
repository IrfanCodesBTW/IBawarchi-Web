import os
from PIL import Image

# Path to brain folder and output directory
brain_path = r"C:\Users\Shaik Irfan\.gemini\antigravity-ide\brain\6be732e3-9358-40a6-baa9-7feebdd34f8c"
output_dir = r"f:\projects\Bawarchi\public\images\dishes"

# Load the images
img_1 = Image.open(os.path.join(brain_path, "media__1780164001133.jpg")) # Veg Biryani, Noodles, Mutton Biryani
img_2 = Image.open(os.path.join(brain_path, "media__1780164018898.jpg")) # Kababs, Veg Starters
img_4 = Image.open(os.path.join(brain_path, "media__1780164129183.jpg")) # Chicken Curries, Veg Curries (Part 1, 2)
img_5 = Image.open(os.path.join(brain_path, "media__1780164322001.jpg")) # Veg Curries (Part 3), Fried Rice, Breads

# We define columns and rows mathematically with slight padding to avoid borders
def get_col_x(col_index, total_cols, total_width=1024):
    w = total_width / total_cols
    x1 = int(col_index * w) + 2
    x2 = int((col_index + 1) * w) - 2
    return x1, x2

crops = {}

# ==================== IMAGE 1 (Veg Biryani, Noodles, Mutton Biryani) ====================
# Row 1 (Veg Biryani, 5 columns) - Y: 34 to 217
veg_biryani_names = ["paneer_biryani.png", "paneer_handi.png", "veg_biryani_plate.png", "egg_biryani.png", "biryani_rice.png"]
for i, name in enumerate(veg_biryani_names):
    x1, x2 = get_col_x(i, 5)
    crops[name] = (img_1, (x1, 34, x2, 217))

# Row 2 (Noodles, 4 columns) - Y: 276 to 448
noodles_names = ["chicken_noodles.png", "egg_noodles.png", "veg_noodles.png", "mix_noodles.png"]
for i, name in enumerate(noodles_names):
    x1, x2 = get_col_x(i, 4)
    crops[name] = (img_1, (x1, 276, x2, 448))

# Row 3 (Mutton Biryani, 4 columns) - Y: 502 to 648
mutton_biryani_names = ["mutton_special_handi.png", "mutton_family_pack.png", "mutton_jumbo_pack.png", "mutton_biryani.png"]
for i, name in enumerate(mutton_biryani_names):
    x1, x2 = get_col_x(i, 4)
    crops[name] = (img_1, (x1, 502, x2, 648))

# ==================== IMAGE 2 (Kababs, Veg Starters) ====================
# Row 1 (Kababs 1, 6 columns) - Y: 31 to 215
kabab_names_1 = ["grill_chicken.png", "tandoori_chicken.png", "tandi_kabab.png", "chicken_tikka.png", "malai_kabab.png", "haryali_kabab.png"]
for i, name in enumerate(kabab_names_1):
    x1, x2 = get_col_x(i, 6)
    crops[name] = (img_2, (x1, 31, x2, 215))

# Row 2 (Kababs 2, 2 populated out of 6 columns) - Y: 241 to 416
kabab_names_2 = ["adraki_panchy.png", "hot_kabab_full_bird.png"]
for i, name in enumerate(kabab_names_2):
    x1, x2 = get_col_x(i, 6)
    crops[name] = (img_2, (x1, 241, x2, 416))

# Row 3 (Veg Starters 1, 5 columns) - Y: 466 to 619
veg_starters_1 = ["veg_manchuria.png", "veg_65.png", "crispy_veg.png", "aloo_65.png", "gobi_manchuria.png"]
for i, name in enumerate(veg_starters_1):
    x1, x2 = get_col_x(i, 5)
    crops[name] = (img_2, (x1, 466, x2, 619))

# Row 4 (Veg Starters 2, 4 populated out of 5 columns) - Y: 648 to 788
veg_starters_2 = ["paneer_chilly.png", "paneer_majestic.png", "paneer_65.png", "paneer_555.png"]
for i, name in enumerate(veg_starters_2):
    x1, x2 = get_col_x(i, 5)
    crops[name] = (img_2, (x1, 648, x2, 788))

# ==================== IMAGE 4 (Chicken Curries & Veg Curries Part 1, 2) ====================
# Row 1 (Chicken Curries 1, 6 columns) - Y: 30 to 160
curries_row_1 = ["ib_special_curry.png", "special_murg_musallam.png", "dum_ka_chicken.png", "chicken_shahi_khorma.png", "kashmir_chicken.png", "chicken_curry.png"]
for i, name in enumerate(curries_row_1):
    x1, x2 = get_col_x(i, 6)
    crops[name] = (img_4, (x1, 30, x2, 160))

# Row 2 (Chicken Curries 2, 5 unique + 1 duplicate (butter chicken) which we already have, let's crop all 6) - Y: 188 to 320
curries_row_2 = ["chicken_masala.png", "chicken_moghlai.png", "chicken_afghani.png", "chicken_chatpata.png", "butter_chicken.png", "chicken_kolhapuri.png"]
for i, name in enumerate(curries_row_2):
    x1, x2 = get_col_x(i, 6)
    crops[name] = (img_4, (x1, 188, x2, 320))

# Row 3 (Chicken Curries 3, 6 columns) - Y: 340 to 480
curries_row_3 = ["ginger_chicken.png", "andhra_chicken.png", "telangana_chicken.png", "kadai_chicken.png", "chicken_tikka_masala.png", "punjabi_chicken.png"]
for i, name in enumerate(curries_row_3):
    x1, x2 = get_col_x(i, 6)
    crops[name] = (img_4, (x1, 340, x2, 480))

# Row 4 (Veg Curries 1, 6 columns) - Y: 536 to 640
veg_curries_row_1 = ["special_veg_curry.png", "dal_fry.png", "dal_tadka.png", "veg_shabnam.png", "kadai_veg.png", "mix_veg_curry.png"]
for i, name in enumerate(veg_curries_row_1):
    x1, x2 = get_col_x(i, 6)
    crops[name] = (img_4, (x1, 536, x2, 640))

# Row 5 (Veg Curries 2, 6 columns) - Y: 668 to 790
veg_curries_row_2 = ["aloo_gobi_kolhapuri.png", "veg_jaipuri.png", "veg_chatpata.png", "aloo_palak.png", "plain_palak.png", "paneer_shahi_khorma.png"]
for i, name in enumerate(veg_curries_row_2):
    x1, x2 = get_col_x(i, 6)
    crops[name] = (img_4, (x1, 668, x2, 790))

# ==================== IMAGE 5 (Veg Curries Part 3, Fried Rice, Breads) ====================
# Row 1 (Veg Curries 3, 6 columns) - Y: 34 to 218
veg_curries_row_3 = ["kaju_paneer.png", "kadai_paneer.png", "kaju_masala.png", "malai_kofta.png", "palak_paneer.png", "paneer_do_pyaza.png"]
for i, name in enumerate(veg_curries_row_3):
    x1, x2 = get_col_x(i, 6)
    crops[name] = (img_5, (x1, 34, x2, 218))

# Row 2 (Fried Rice, 6 columns) - Y: 279 to 420
fried_rice_names = ["chicken_fried_rice.png", "egg_fried_rice.png", "veg_fried_rice.png", "mix_fried_rice.png", "curd_rice.png", "jeera_rice.png"]
for i, name in enumerate(fried_rice_names):
    x1, x2 = get_col_x(i, 6)
    crops[name] = (img_5, (x1, 279, x2, 420))

# Row 3 (Indian Breads, 5 columns) - Y: 484 to 646
breads_names = ["tandoori_roti.png", "rumali_roti.png", "butter_naan.png", "plain_naan.png", "garlic_naan.png"]
for i, name in enumerate(breads_names):
    x1, x2 = get_col_x(i, 5)
    crops[name] = (img_5, (x1, 484, x2, 646))

print("Cropping and saving Batch 3:")
for filename, (src_img, box) in crops.items():
    cropped_img = src_img.crop(box)
    target_path = os.path.join(output_dir, filename)
    cropped_img.save(target_path, "PNG")
    print(f"Saved {filename} to {target_path} (Size: {cropped_img.size})")

print("All 76 images cropped and saved successfully!")
