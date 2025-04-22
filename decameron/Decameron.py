import re
from collections import defaultdict

# Read the content of the file (assuming it's stored in 'Decameron.txt')
with open('decameron/Decameron.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# Define a function to extract names from each section
def extract_names(section):
    # Using regex to capture first and last names, including those with multiple words or special characters
    names = re.findall(r'([A-Za-zàèéìòùÀÈÉÌÒÙ]+(?: [A-Za-zàèéìòùÀÈÉÌÒÙ]+)*)(?=\s?\()', section)
    return names

# Create a dictionary to store the sections and their associated names
sections = defaultdict(list)

# Split the content into sections based on Roman numeral headings (II 1, II 2, etc.)
section_pattern = re.compile(r'(II \d+)', re.IGNORECASE)
sections_text = section_pattern.split(content)

# Iterate through the sections and extract names
for i in range(1, len(sections_text), 2):
    section_name = sections_text[i].strip()
    section_content = sections_text[i+1].strip()
    names = extract_names(section_content)
    sections[section_name].extend(names)

# Create a dictionary to store the sections where each name appears
name_occurrences = defaultdict(list)

# Populate the name_occurrences dictionary
for section, names in sections.items():
    for name in names:
        # Normalize the name to lowercase to handle case insensitivity
        normalized_name = name.lower().strip()

        # Append section if it's not already recorded for the name
        if section not in name_occurrences[normalized_name]:
            name_occurrences[normalized_name].append(section)

# Now, let's output the overlapping names with the required format
for name, sections_list in name_occurrences.items():
    # Only output names that appear in more than one section
    if len(sections_list) > 1:
        # Create the formatted output string
        formatted_sections = " and ".join(sections_list)
        print(f"name {name} in {formatted_sections}")
