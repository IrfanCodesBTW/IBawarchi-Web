import os
import time

now = time.time()
brain_path = r"C:\Users\Shaik Irfan\.gemini\antigravity-ide\brain\6be732e3-9358-40a6-baa9-7feebdd34f8c"

recent_files = []
for file in os.listdir(brain_path):
    if file.startswith("media__") and file.lower().endswith(('.jpg', '.jpeg', '.png')):
        file_path = os.path.join(brain_path, file)
        mtime = os.path.getmtime(file_path)
        # Modified in the last 15 minutes
        if now - mtime < 15 * 60:
            recent_files.append((file_path, mtime))

# Sort by modification time, newest first
recent_files.sort(key=lambda x: x[1], reverse=True)

print("Recent uploaded media files:")
for path, mtime in recent_files:
    print(f"{path} - Modified {time.ctime(mtime)}")
