import os
import re
import json

print("Converts old .md files to .mdx files...")
print("Make sure to run this script in the same directory as the .md files.")

def extract_properties_from_file(filepath):
    """Extract key-value pairs from the JSON section of a .mdx file, ignoring negative numbers."""
    with open(filepath, 'r', encoding='utf-8') as file:
        content = file.read()

    key_value_pairs = {}
    json_match = re.search(r'```json\n(.*?)\n```', content, re.DOTALL)
    if json_match:
        json_content = json_match.group(1)
        for line in json_content.splitlines():
            line = line.strip().strip(',')
            if ':' in line:
                key, value = line.split(':', 1)
                key = key.strip().strip('"')
                value = value.strip().strip('"')

                try:
                    value = json.loads(value)  # Parse the value into the appropriate data type (int, float, etc.)
                    
                    # Check if the value is a number and if it is negative
                    if isinstance(value, (int, float)) and value < 0:
                        continue  # Skip this property if it's a negative number

                except json.JSONDecodeError:
                    pass  # If it can't be parsed as JSON (number), it remains a string

                key_value_pairs[key] = value  # Add the valid key-value pair to the dictionary

    return key_value_pairs

def convert_md_to_mdx(directory):
    for filename in os.listdir(directory):
        if filename.endswith('.md'):
            old_file_path = os.path.join(directory, filename)
            new_file_path = os.path.join(directory, filename[:-3] + '.mdx')

            with open(old_file_path, 'r', encoding='utf-8') as file:
                lines = file.readlines()

            # Use the filename (without extension) as the widget type
            widget_type = filename[:-3].lower()

            # Prepare the new content
            new_content = []
            imports = set()  # Collect import statements
            properties = {}

            for line in lines:
                stripped_line = line.strip()

                if stripped_line.startswith("##Example"):
                    line = '## Example\n'
                
                # Remove <video>, <big>, <source> sections
                if stripped_line.startswith("<video") or stripped_line.startswith("</video>"):
                    continue
                if stripped_line.startswith("<big>") or stripped_line.startswith("</big>") or stripped_line.startswith("</pre>"):
                    continue
                if stripped_line.startswith("<source"):
                    continue

                # Retain the Specific and Common Identifier headers
                if stripped_line.startswith('### Specific Identifiers') or stripped_line.startswith('### Common Identifiers'):
                    new_content.append(line)
                    continue

                # Replace any `{! ./markdown/Widgets/Properties/*.md !}` with corresponding JSX components
                if '{! ./markdown/Widgets/Properties/' in line:
                    match = re.search(r'{! \./markdown/Widgets/Properties/(.+?)\.md !}', line)
                    if match:
                        property_name = match.group(1)  # Example: 'latched'
                        component_name = property_name.capitalize()  # Example: 'Latched'

                        # Add the import statement at the top
                        import_statement = f'import {component_name} from "./properties/{property_name}.mdx";\n'
                        imports.add(import_statement)

                        # Replace the line with JSX component
                        new_content.append(f'<{component_name} />\n')

                        # Extract properties from the imported file and add them
                        property_file_path = os.path.join(directory, 'properties', f'{property_name}.mdx')
                        properties.update(extract_properties_from_file(property_file_path))

                    continue

                # Change ```csharp to ```cs
                if stripped_line.startswith("```csharp"):
                    new_content.append(line.replace('csharp', 'cs'))
                    continue

                # Add all other lines
                new_content.append(line)

            # Construct the JSON object
            json_object = {"type": widget_type}

            # If bounds and channel are found, add them
            bounds_match = re.search(r'bounds\((.*?)\)', ' '.join(new_content))
            if bounds_match:
                json_object['bounds'] = bounds_match.group(1).strip()

            channel_match = re.search(r'channel\((.*?)\)', ' '.join(new_content))
            if channel_match:
                json_object['channel'] = channel_match.group(1).strip().replace('"', '')

            # Add properties collected from imported files
            json_object.update(properties)

            # Prepend import statements at the beginning of the content
            final_content = list(imports) + ["\n"] + new_content

            # Write the transformed content to the new .mdx file
            with open(new_file_path, 'w', encoding='utf-8') as new_file:
                for line in final_content:
                    if 'WIDGET_SYNTAX' in line:
                        # Replace the line with the JSON object as a formatted string
                        json_text = '## Syntax\n```json\n' + json.dumps(json_object, indent=2) + '\n```\n'
                        new_file.write(json_text)
                    else:
                        new_file.write(line)

            print(f"Converted '{filename}' to '{new_file_path}'.")

# Specify the directory containing the .md files
directory_path = '.'  # Change to your directory path
convert_md_to_mdx(directory_path)
