from PIL import Image
import numpy as np

image_path = r"C:\Users\Shaik Irfan\.gemini\antigravity-ide\brain\6be732e3-9358-40a6-baa9-7feebdd34f8c\media__1780163033139.jpg"
img = Image.open(image_path).convert('L')
data = np.array(img)

# Let's inspect a column segment corresponding to the middle of the first panel (Col 1, around X = 170)
# We look at Y coordinates from 250 to 351 (near the middle line)
print("Col 1 middle brightness at Y = 280..351:")
for y in range(280, 352):
    print(f"Y {y}: {data[y, 170]}")

print("\nCol 1 middle brightness at Y = 600..682:")
for y in range(600, 682):
    print(f"Y {y}: {data[y, 170]}")
