---
title: Using Cabbage 3
description: Using Cabbage 3
---

The Cabbage 3 VS Code Extension offers a seamless workflow for designing and testing instruments directly within Visual Studio Code. It provides full access to Cabbage's robust UI and audio capabilities, allowing developers to create and refine their projects efficiently. Below, you’ll find an overview of its key features, commands, and tips to help you get started.

> The VS Code extension only supports exporting of VST3 effects and synths for now. AU export targets are currently under development.   

## Table of Contents
- [Working with your Cabbage instruments](#working-with-your-cabbage-instruments)
- [List of commands](#list-of-commands)
  - [Running](#running)
  - [Formatting](#formatting)
  - [Configuration](#configuration)
  - [Exporting](#exporting)
- [Configuration Properties](#configuration-properties)


## Working with your Cabbage instruments

Once the Cabbage extension is enabled in Visual Studio Code, it will automatically attempt to load any Cabbage 3 instrument definitions in a preview web panel each time you save a .csd file (Unified Csound Document). This live preview allows you to view and interact with the instrument's user interface, giving you immediate feedback on your design.

To access Edit Mode, open the command palette (press Ctrl+Shift+P on Windows/Linux or Cmd+Shift+P on macOS) and select the `vscabbage: Enter Edit Mode` command. In Edit Mode, you can adjust widget properties such as dimensions, colors, fonts, and more to customize your instrument's UI. Each modification updates the instrument's Cabbage JSON code in real-time, enabling quick iteration.

Once you’re satisfied with your changes, save the .csd file. Saving will close the UI editor and return you to Performance Mode, where you can test the instrument as it would appear in a live environment.

> All VS Code commands can be assigned keyboard shortcuts to help speed up development. 

## List of commands

Ctrl+S and Ctrl+E are the default shortcuts for running and entering edit mode. The following commands, which don't have keyboard shortcuts attached, are all accessible from the command palette. To access the command palette in Visual Studio Code, you can use the following keyboard shortcuts:

- **Windows/Linux**: Press `Ctrl + Shift + P`
- **macOS**: Press `Cmd + Shift + P`

Once the command palette is open, you can start typing the name of the command you want to execute. For example, you can type "Cabbage" to filter the commands related to the Cabbage extension. Select the desired command from the list to execute it. Below are the commands currently provided. 

### Running

1. **Launch Cabbage**
   - Hitting save (Ctrl+S) on any .csd file that contains a valid Cabbage JSON section will launch the instrument UI in a new tab.

2. **Edit Mode**
   - Toggles the edit mode for the Cabbage interface (Ctrl+E when an instrument UI has focus). When in edit mode users can right-click to show the context menu, whereupon they can select a widget to add to the UI.

### Formatting

3. **Format Document**
   - Formats the current document according to Cabbage formatting rules.

4. **Expand Cabbage section**
   - Expands the Cabbage section in the current document for easier editing.

### Configuration

5. **Select Sampling Rate**
   - Opens a prompt to select the audio sampling rate for the project.

6. **Select Buffer Size**
   - Opens a prompt to select the audio buffer size for the project.

7. **Select Audio Output Device**
   - Opens a prompt to select the audio output device.

8. **Select Audio Input Device**
   - Opens a prompt to select the audio input device.

9. **Select MIDI Input Device**
   - Opens a prompt to select the MIDI input device.

10. **Select MIDI Output Device**
    - Opens a prompt to select the MIDI output device.

11. **Set Cabbage source path**
    - Opens a dialog to set the path to the Cabbage JS source directory. 
    > This is set by the extension and should not be overridden unless you know what you are doing!

12. **Set path to the Cabbage binary**
    - Opens a dialog to set the path to the Cabbage binary executable, that is CabbageApp.app on MacOS and CabbageApp.exe on Windows. 
    > This is also set by the extension and should not be overridden unless you know what you are doing!

### Exporting

13. **Export as VST3 Effect**
    - Opens a file dialogue and lets users export the current project as a VST3 effect plugin. 

14. **Export as VST3 Synth**
    - Opens a file dialogue and lets users export the current project as a VST3 synthesizer plugin.

15. **Export as AUv2 Effect**
    - Opens a file dialogue and lets users export the current project as an AUv2 effect plugin.

16. **Export as AUv2 Synth**
    - Opens a file dialogue and lets users export the current project as an AUv2 synthesizer plugin.

> Exporting creates a new plugin binary and saves it to the specified location. Unlike in Cabbage 2, the .csd file is no longer placed inside the plugin bundle. Instead, it is added to a separate directory along with all the necessary JavaScript, HTML, and CSS files required to support your web-based UI. When the plugin is loaded in a DAW it will serve the contents of the folder using its in-built live server. Each plugin will run on a unique port.

## Configuration Properties

The following configuration properties should be set using the command shown above:

- **cabbage.pathToCabbageBinary**: 
  - Path to the Cabbage service app (use command palette to browse for directory).

- **cabbage.pathToJsSource**: 
  - Path to the Cabbage Javascript directory.

- **cabbage.audioOutputDevice**: 
  - Selected audio output device. Use command palette to change.

- **cabbage.audioInputDevice**: 
  - Selected audio input device. Use command palette to change.

- **cabbage.midiOutputDevice**: 
  - Selected MIDI output device. Use command palette to change.

- **cabbage.midiInputDevice**: 
  - Selected MIDI input device. Use command palette to change.

- **cabbage.audioSampleRate**: 
  - Selected sampling rate. Use command palette to change.

- **cabbage.audioBufferSize**: 
  - Selected buffer size. Use command palette to change.

- **cabbage.snapToSize**: 
  - Set the number of pixels to move by when dragging an element.

- **cabbage.saveExternalJSON**: 
  - Enable automatic saving of external JSON when compiling .csd file.

- **cabbage.showUIOnSave**: 
  - Display UI each time a Cabbage .csd file is saved.

- **cabbage.defaultJsonFormatting**: 
  - Choose an option for JSON formatting, either "Single line objects" or "Multiline objects".
