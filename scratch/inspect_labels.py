import os
from PIL import Image
import numpy as np

files = {
    "Image A (Popular & Veg Soups)": ("media__1780163357055.jpg", [34, 348], [348, 682]),
    "Image B (Non Veg Soups & Starters)": ("media__1780163382117.jpg", [34, 331], [331, 682]),
    "Image C (Chicken Starters & Kebabs)": ("media__1780163491951.jpg", [0, 250], [250, 530], [530, 819])
}

brain_path = r"C:\Users\Shaik Irfan\.gemini\antigravity-ide\brain\6be732e3-9358-40a6-baa9-7feebdd34f8c"

for name, info in files.items():
    filename = info[0]
    img_path = os.path.join(brain_path, filename)
    if not os.path.exists(img_path):
        continue
    img = Image.open(img_path).convert('L')
    data = np.array(img)
    
    print(f"\n--- {name} ---")
    rows = info[1:]
    for r_idx, r_range in enumerate(rows):
        start_y, end_y = r_range
        # Compute mean brightness along the rows in this range
        segment = data[start_y:end_y, :]
        row_means = np.mean(segment, axis=1)
        
        # Search from the bottom of this row range upwards (end_y down to start_y)
        # We look for the first row where the brightness jumps from black/border to the food content
        # The label area has black background (mean < 15) and text (some bright pixels).
        # But near the border between food and label, there is a solid black transition.
        # Let's print the last 50 row means of this range
        print(f"Row {r_idx+1} (Y: {start_y} to {end_y}) - Last 40 row means:")
        for idx in range(len(row_means) - 40, len(row_means)):
            abs_y = start_y + idx
            print(f"  Y {abs_y}: {row_means[idx]:.2f}")
