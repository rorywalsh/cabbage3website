---
title: Custom User Interfaces
description: Custom UI's
---

Cabbage 3 includes a variety of standard plugin controls such as sliders and buttons. However, it also provides straightforward options for creating your own custom elements. There are two primary methods for building custom UIs:

1. ## **Custom Widget Classes**

    Create new widget classes and add them to Cabbage. This approach allows you to develop custom widgets while retaining the convenience of the editing tools available in the Cabbage VS Code extension. To achieve this, follow these steps:

* **Steps to Create a New Widget Class**:

    * **Create a New Widget Class**(): Use an existing widget class as a template. Below are key members you’ll need to define: 
        * **`this.props`**:
            This JSON object contains properties accessible through the UI element inspectors in VS Code. Any property defined here can also be queried and modified using the Cabbage get and set opcodes in Csound. At a minimum, this must include:
            * A channel field
            * A bounds object to define dimensions and placement

        * Add Event Listener Methods:
            Implement two methods:

            * **`addVsCodeEventListeners(widgetDiv, vs)`**: Called when Cabbage is running from VS Code.
            * **`addVsCodeEventListeners()`**: Called when Cabbage is running as a plugin.

        Both methods need to be implemented to ensure compatibility with different environments.

        * Define a **`getInnerHTML()`** method. This method should return the inner HTML used to render the UI element. The element’s size is determined by its bounds object. You can return an svg element or another div element, depending on your design needs.

    * Add class to the Cabbage `src/cabbage/widgets` directory. This is installed with the VS Code extension. On MacOS it can be found here in `~/.vscode/extensions`, and on Windows it can be found in `%USERPROFILE%\.vscode\extensions`, where `%USERPROFILE%` is typically `C:\Users\your-username`. When in place, both the VS Code extension and the Cabbage service app will be able to access them. These source files get copied whenever Cabbage export a new plugin.  

2. ## **Entirely new web-based interfaces**

    You can design an entirely new web-based interface using any framework you prefer. To ensure communication with the Csound/Cabbage plugin, you’ll need to include the cabbage.js file, which contains some basic functions to send data to Csound from teh web UI. While this method does not offer access to the UI editing tools in Cabbage, it provides maximum freedom to design and implement unique UIs tailored to your needs.

    You will also need to implement some kind of 'updateWidget' listener in order to receive update data from Csound. Please look through `cabbage/main.js` file for details on how this is done using the in-built widgets. 

    >**Note**: *You must add dummy parameters to the Cabbage section so that the software can set up the necessary channels and plugin parameters*.