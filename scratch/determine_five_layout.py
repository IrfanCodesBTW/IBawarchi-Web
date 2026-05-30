import os
from PIL import Image
import numpy as np

files = [
    "media__1780164001133.jpg",
    "media__1780164018898.jpg",
    "media__1780164115445.jpg",
    "media__1780164129183.jpg",
    "media__1780164322001.jpg"
]

brain_path = r"C:\Users\Shaik Irfan\.gemini\antigravity-ide\brain\6be732e3-9358-40a6-baa9-7feebdd34f8c"

for f in files:
    img_path = os.path.join(brain_path, f)
    if not os.path.exists(img_path):
        continue
    img = Image.open(img_path).convert('L')
    data = np.array(img)
    height, width = data.shape
    
    row_means = np.mean(data, axis=1)
    col_means = np.mean(data, axis=0)
    
    print(f"\n=== Analyzing {f} (Height: {height}, Width: {width}) ===")
    
    # Check Y splits (rows) by scanning for low values in row_means or simple splits
    # If 2 rows: around middle (300-380)
    # If 3 rows: around 273 and 546
    # If 4 rows: around 228, 456, 684
    # Let's print local minima for rows
    import scipy.signal
    row_minima = []
    # Pure numpy check for local minima in row_means with a threshold/window
    for i in range(10, height - 10):
        if row_means[i] < row_means[i-1] and row_means[i] < row_means[i+1]:
            # check if it is a local minimum in a window of 15 pixels
            window = row_means[max(0, i-15):min(height, i+15)]
            if row_means[i] == np.min(window):
                row_minima.append(i)
    
    col_minima = []
    for i in range(10, width - 10):
        if col_means[i] < col_means[i-1] and col_means[i] < col_means[i+1]:
            window = col_means[max(0, i-15):min(width, i+15)]
            if col_means[i] == np.min(window):
                col_minima.append(i)
                
    print("Detected Row Minima:", row_minima)
    print("Detected Col Minima:", col_minima)
