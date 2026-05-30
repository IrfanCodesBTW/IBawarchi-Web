import os
from PIL import Image

files = [
    "media__1780163357055.jpg",
    "media__1780163382117.jpg",
    "media__1780163491951.jpg"
]

brain_path = r"C:\Users\Shaik Irfan\.gemini\antigravity-ide\brain\6be732e3-9358-40a6-baa9-7feebdd34f8c"

for f in files:
    img_path = os.path.join(brain_path, f)
    if os.path.exists(img_path):
        img = Image.open(img_path)
        print(f"{f}: Size={img.size}")
    else:
        print(f"{f} does not exist!")
