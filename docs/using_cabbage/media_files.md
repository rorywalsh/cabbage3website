---
title: Working with Media Files
description: Managing media files in Cabbage 3
---

## Media Files in Cabbage

Because Cabbage uses a web frontend, all media files are sand-boxed. This means that for security reasons, your instrument can only access files within its own designated directory structure. The browser-based interface cannot directly access files from arbitrary locations on your computer - they must be properly included in your project's folder. 

## File Organization

It's recommended to organize your media files in a structured way:
- Create a `media` folder in your project directory, that is the same folder that contains the `.csd` file. 

## Accessing Media Files

When referencing media files in your Cabbage instrument:
- Use only the filename and extension. Cabbage will automatically search the media folder


## Bundling Media Files (todo)

When exporting your instrument as a plugin:
- All referenced media files are automatically included in the export
- Files are bundled in the plugin's resource directory
- Maintain the same relative path structure in your code

> Note: Keep your media files optimized for size to ensure efficient plugin loading and distribution. 