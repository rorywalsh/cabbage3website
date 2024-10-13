import os
import re

def convert_md_to_mdx(directory):
    # Regex patterns to match and transform text
    delimiter_pattern = r'^[\s_]+$'  # Matches lines of underscores
    function_pattern = r'\*\*(.+?)\*\*'  # Matches text in double asterisks

    for filename in os.listdir(directory):
        if filename.endswith('.md'):
            old_file_path = os.path.join(directory, filename)
            new_file_path = os.path.join(directory, filename[:-3] + '.mdx')

            with open(old_file_path, 'r', encoding='utf-8') as file:
                lines = file.readlines()

            # Remove lines up to and including the delimiter
            content_lines = []
            delimiter_found = False
            for line in lines:
                if re.match(delimiter_pattern, line):
                    delimiter_found = True
                    continue  # Skip the delimiter line
                if delimiter_found:
                    content_lines.append(line)  # Keep remaining lines

            # Process the content to transform it
            new_content = []
            inside_comment = False  # Flag to track if we are inside a comment block

            for line in content_lines:
                stripped_line = line.strip()

                # Check if this line starts a comment block
                if stripped_line.startswith("<!--UPDATE WIDGET_IN_CSOUND"):
                    inside_comment = True  # We are inside a comment
                    continue  # Skip this line

                # Check if this line ends a comment block
                if inside_comment:
                    if stripped_line.endswith("-->"):
                        inside_comment = False  # We just exited a comment block
                        continue  # Skip this line
                    else:
                        continue  # Skip all lines while inside the comment

                # Transform the function definitions
                match = re.search(function_pattern, line)
                if match:
                    function_text = match.group(1)
                    # Extract the function name and arguments
                    parts = function_text.split('(')
                    function_name = parts[0].strip()
                    arguments = parts[1].strip(')') if len(parts) > 1 else ''

                    # Format the arguments correctly
                    arguments_list = [arg.strip() for arg in arguments.split(',')] if arguments else []

                    # Handle single parameter without array, multiple parameters as array
                    if len(arguments_list) == 1:
                        json_format = f'"{function_name}": {arguments_list[0]}'
                    else:
                        json_format = f'"{function_name}": [{", ".join(arguments_list)}]'

                    # Add the JSON format block
                    new_content.append(f'```json\n{json_format}\n```\n')

                    # Retain the description after the function definition
                    remaining_text = line.split("**", 2)[-1].strip()  # After the function definition
                    if remaining_text:
                        new_content.append(remaining_text + '\n')

                else:
                    # Remove HTML tags and keep markdown
                    clean_line = re.sub(r'<[^>]+>', '', line)  # Remove HTML tags
                    new_content.append(clean_line.strip() + '\n')

            # Write the transformed content to the new .mdx file
            with open(new_file_path, 'w', encoding='utf-8') as new_file:
                new_file.writelines(new_content)

            print(f"Converted '{filename}' to '{new_file_path}'.")

# Specify the directory containing the .md files
directory_path = '.'
convert_md_to_mdx(directory_path)
