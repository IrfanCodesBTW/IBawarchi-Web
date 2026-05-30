from PIL import Image
import numpy as np

image_path = r"C:\Users\Shaik Irfan\.gemini\antigravity-ide\brain\6be732e3-9358-40a6-baa9-7feebdd34f8c\media__1780163033139.jpg"
img = Image.open(image_path).convert('L')
data = np.array(img)

height, width = data.shape
print(f"Loaded image. Height: {height}, Width: {width}")

# Compute average brightness along rows and columns
row_means = np.mean(data, axis=1)
col_means = np.mean(data, axis=0)

# 1. Find the header line (y in range 20 to 60)
header_y = np.argmin(row_means[20:60]) + 20
print(f"Header line detected at Y = {header_y} (brightness = {row_means[header_y]:.2f})")

# 2. Find the middle horizontal line (y in range 300 to 380)
middle_y = np.argmin(row_means[300:380]) + 300
print(f"Middle horizontal line detected at Y = {middle_y} (brightness = {row_means[middle_y]:.2f})")

# 3. Find vertical split lines (x in range 320 to 360, and 660 to 700)
col_split_1 = np.argmin(col_means[320:360]) + 320
col_split_2 = np.argmin(col_means[660:700]) + 660
print(f"Vertical split line 1 detected at X = {col_split_1} (brightness = {col_means[col_split_1]:.2f})")
print(f"Vertical split line 2 detected at X = {col_split_2} (brightness = {col_means[col_split_2]:.2f})")
