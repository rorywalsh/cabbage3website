---
title: Configuration
description: Configuration properties in Cabbage 3
---

## Table of Contents
- [Overview](#overview)
- [Path Configuration](#path-configuration)
- [Audio Configuration](#audio-configuration)
- [MIDI Configuration](#midi-configuration)
- [UI Configuration](#ui-configuration)

## Overview
The following configuration properties should be set using the command shown above:

## Path Configuration
- **cabbage.pathToCabbageBinary**: 
  - Path to the Cabbage service app (use command palette to browse for directory).
- **cabbage.pathToJsSource**: 
  - Path to the Cabbage Javascript directory.

## Audio Configuration
- **cabbage.audioOutputDevice**: 
  - Selected audio output device. Use command palette to change.
- **cabbage.audioInputDevice**: 
  - Selected audio input device. Use command palette to change.
- **cabbage.audioSampleRate**: 
  - Selected sampling rate. Use command palette to change.
- **cabbage.audioBufferSize**: 
  - Selected buffer size. Use command palette to change.

## MIDI Configuration
- **cabbage.midiOutputDevice**: 
  - Selected MIDI output device. Use command palette to change.
- **cabbage.midiInputDevice**: 
  - Selected MIDI input device. Use command palette to change.

## UI Configuration
- **cabbage.snapToSize**: 
  - Set the number of pixels to move by when dragging an element.
- **cabbage.saveExternalJSON**: 
  - Enable automatic saving of external JSON when compiling .csd file.
- **cabbage.showUIOnSave**: 
  - Display UI each time a Cabbage .csd file is saved.
- **cabbage.defaultJsonFormatting**: 
  - Choose an option for JSON formatting, either "Single line objects" or "Multiline objects". 