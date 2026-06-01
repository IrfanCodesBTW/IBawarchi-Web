import os
from PIL import Image, ImageDraw

src_path = r"C:\Users\Shaik Irfan\.gemini\antigravity-ide\brain\f3e52822-3393-4c9c-a33e-62f3e509c453\media__1780303882903.jpg"
img = Image.open(src_path)
width, height = img.size
print(f"Image dimensions: {width}x{height}")

# Let's draw horizontal lines at Y coordinates from 0 to 680 with steps of 20
# and vertical lines at X coordinates from 0 to 1024 with steps of 50
annotated = img.copy()
draw = ImageDraw.Draw(annotated)

# Draw horizontal lines and label them
for y in range(0, height, 20):
    draw.line([(0, y), (width, y)], fill="red", width=1)
    if y % 40 == 0:
        draw.text((10, y + 2), f"Y={y}", fill="yellow")

# Draw vertical lines and label them
for x in range(0, width, 50):
    draw.line([(x, 0), (x, height)], fill="blue", width=1)
    if x % 100 == 0:
        draw.text((x + 2, 10), f"X={x}", fill="yellow")

out_path = r"f:\projects\Bawarchi\public\images\dishes\inspect_grid_3x3.png"
annotated.save(out_path)
print(f"Annotated grid saved to {out_path}")
