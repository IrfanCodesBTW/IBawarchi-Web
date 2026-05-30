from PIL import Image

image_path = r"C:\Users\Shaik Irfan\.gemini\antigravity-ide\brain\6be732e3-9358-40a6-baa9-7feebdd34f8c\media__1780163033139.jpg"
img = Image.open(image_path)
width, height = img.size
print(f"Image dimensions: Width={width}, Height={height}")
