import os
import time

now = time.time()
paths_to_check = [
    r"f:\projects\Bawarchi",
    r"C:\Users\Shaik Irfan\.gemini\antigravity-ide"
]

recent_files = []

for base_path in paths_to_check:
    if not os.path.exists(base_path):
        continue
    for root, dirs, files in os.walk(base_path):
        # Skip node_modules and .git
        if "node_modules" in root or ".git" in root:
            continue
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in ['.png', '.jpg', '.jpeg']:
                file_path = os.path.join(root, file)
                try:
                    mtime = os.path.getmtime(file_path)
                    # Modified in the last 15 minutes
                    if now - mtime < 15 * 60:
                        recent_files.append((file_path, mtime))
                except Exception as e:
                    pass

# Sort by modification time, newest first
recent_files.sort(key=lambda x: x[1], reverse=True)

print("Recent image files found:")
for path, mtime in recent_files:
    print(f"{path} - Modified {time.ctime(mtime)}")
