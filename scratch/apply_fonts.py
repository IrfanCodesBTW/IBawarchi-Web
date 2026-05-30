with open(r'f:\projects\Bawarchi\scratch\local_fonts.css', 'r', encoding='utf-8') as f:
    local_fonts = f.read()

with open(r'f:\projects\Bawarchi\src\index.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Replace the first line containing the @import statement
lines[0] = local_fonts + '\n'

with open(r'f:\projects\Bawarchi\src\index.css', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Successfully replaced external font imports in index.css with local font-face definitions.")
