---
title: Cabbage Commands
description: Available commands in Cabbage 3
---

## Table of Contents
- [Command Palette Access](#command-palette-access)
- [Commands](#commands)
  - [Running](#running)
  - [Formatting](#formatting)
  - [Utilities](#utilities)
  - [Configuration](#configuration)
  - [Exporting](#exporting)

## Command Palette Access
Ctrl+S and Ctrl+E are the default shortcuts for running and entering edit mode. The following commands, which don't have keyboard shortcuts attached, are all accessible from the command palette. To access the command palette in Visual Studio Code, you can use the following keyboard shortcuts:

- **Windows/Linux**: Press `Ctrl + Shift + P`
- **macOS**: Press `Cmd + Shift + P`

Once the command palette is open, you can start typing the name of the command you want to execute. For example, you can type "Cabbage" to filter the commands related to the Cabbage extension. Select the desired command from the list to execute it. Below are the commands currently provided. 

## Commands

### Running

- **Launch Cabbage**
  - Hitting save (Ctrl+S) on any .csd file that contains a valid Cabbage JSON section will launch the instrument UI in a new tab.

- **Edit Mode**
  - Toggles the edit mode for the Cabbage interface (Ctrl+E when an instrument UI has focus). When in edit mode users can right-click to show the context menu, whereupon they can select a widget to add to the UI.

### Formatting

- **Format Document**
  - Formats the current document according to Cabbage formatting rules.

- **Expand Cabbage section**
  - Expands the Cabbage section in the current document for easier editing.

### Utilities

- **Jump to Widget Object**
  - Provides a dropdown menu of widget objects. Selecting one will cause the text editor to jump that that object. Objects are listed by their channel name. 

### Configuration

- **Select Sampling Rate**
  - Opens a prompt to select the audio sampling rate for the project.

- **Select Buffer Size**
  - Opens a prompt to select the audio buffer size for the project.

- **Select Audio Output Device**
  - Opens a prompt to select the audio output device.

- **Select Audio Input Device**
  - Opens a prompt to select the audio input device.

- **Select MIDI Input Device**
  - Opens a prompt to select the MIDI input device.

- **Select MIDI Output Device**
  - Opens a prompt to select the MIDI output device.

- **Set Cabbage source path**
  - Opens a dialog to set the path to the Cabbage JS source directory. 
  > This is set by the extension and should not be overwritten unless you know what you are doing!

- **Set path to the Cabbage binary**
  - Opens a dialog to set the path to the Cabbage binary executable, that is CabbageApp.app on MacOS and CabbageApp.exe on Windows. 
  > This is also set by the extension and should not be overwritten unless you know what you are doing!

### Exporting

- **Export as VST3 Effect**
  - Opens a file dialogue and lets users export the current project as a VST3 effect plugin. 

- **Export as VST3 Synth**
  - Opens a file dialogue and lets users export the current project as a VST3 synthesizer plugin.

- **Export as AUv2 Effect**
  - Opens a file dialogue and lets users export the current project as an AUv2 effect plugin.

- **Export as AUv2 Synth**
  - Opens a file dialogue and lets users export the current project as an AUv2 synthesizer plugin.

> Exporting creates a new plugin binary and saves it to the specified location. Unlike in Cabbage 2, the .csd file is no longer placed inside the plugin bundle. Instead, it is added to a separate directory along with all the necessary JavaScript, HTML, and CSS files required to support your web-based UI. When the plugin is loaded in a DAW it will serve the contents of the folder using its in-built live server. Each plugin will run on a unique port. 