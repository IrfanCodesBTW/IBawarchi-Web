import os
from PIL import Image
import numpy as np

files = [
    "media__1780163357055.jpg", # Image A
    "media__1780163382117.jpg", # Image B
    "media__1780163491951.jpg"  # Image C
]

brain_path = r"C:\Users\Shaik Irfan\.gemini\antigravity-ide\brain\6be732e3-9358-40a6-baa9-7feebdd34f8c"

for f in files:
    img_path = os.path.join(brain_path, f)
    if not os.path.exists(img_path):
        print(f"{f} not found!")
        continue
    img = Image.open(img_path).convert('L')
    data = np.array(img)
    height, width = data.shape
    
    row_means = np.mean(data, axis=1)
    col_means = np.mean(data, axis=0)
    
    print(f"\n=== Analyzing {f} (Height: {height}, Width: {width}) ===")
    
    # We can detect major horizontal lines by finding local minima in row_means
    # For horizontal lines, let's print local minima in regions
    # Middle line for 2-row image (height=682) is around 341.
    # Lines for 3-row image (height=819) are around 273 and 546.
    
    # Let's find vertical dividing lines (columns)
    # Col divisions for 4 columns: 256, 512, 768
    # Col divisions for 5 columns: 204.8, 409.6, 614.4, 819.2
    
    # We will print the argmin in these windows to get the exact lines
    if height == 682:
        # Check if it is a 2-row image
        # Let's look for header line around 34 (like the first one)
        header_y = np.argmin(row_means[20:60]) + 20
        middle_y = np.argmin(row_means[300:380]) + 300
        print(f"Detected Y borders: Header={header_y}, Middle={middle_y}")
        
        # Let's check average values near col transitions to identify if it is 4-col or 5-col
        # For 4 columns: X splits around 256, 512, 768
        # For 5 columns: X splits around 205, 410, 614, 819
        col_4_splits = [
            np.argmin(col_means[240:270]) + 240,
            np.argmin(col_means[495:525]) + 495,
            np.argmin(col_means[750:780]) + 750
        ]
        col_5_splits = [
            np.argmin(col_means[190:220]) + 190,
            np.argmin(col_means[395:425]) + 395,
            np.argmin(col_means[600:630]) + 600,
            np.argmin(col_means[800:830]) + 800
        ]
        
        print(f"Potential 4-col splits: {col_4_splits} (brightness: {[col_means[x] for x in col_4_splits]})")
        print(f"Potential 5-col splits: {col_5_splits} (brightness: {[col_means[x] for x in col_5_splits]})")
        
    elif height == 819:
        # Check if it is a 3-row image
        # Let's look for horizontal lines around 273 and 546
        row_split_1 = np.argmin(row_means[250:290]) + 250
        row_split_2 = np.argmin(row_means[530:570]) + 530
        print(f"Detected Y borders: Split1={row_split_1}, Split2={row_split_2}")
        
        # Let's find vertical splits for 4 columns
        col_4_splits = [
            np.argmin(col_means[240:270]) + 240,
            np.argmin(col_means[495:525]) + 495,
            np.argmin(col_means[750:780]) + 750
        ]
        print(f"Detected X splits (4-col): {col_4_splits}")
