# Status Bar Module

Module to instantiate an iOS status bar in your Framer application. Currently only supports iPhone X. We're working on expanding to different iOS devices and to Android devices. 

## Getting Started

Instructions to place the status bar module in your prototype and get you up and running.

# Import module

Copy and paste the **statusBarModule.coffee** file from this application's modules folder into your own project's module folder. Then import the module into your application via:

```coffee
statusBarModule = require 'statusBarModule'
```

# Status Bar Component

Copy and paste the `statusBar` design component from the project into your application's design mode. The module relies on this specific frame and its children.

# Set the Status Bar Color

The status bar has two colors - black and white. Depending on your application, you will want to instantiate your status bar to the applicable color, and perhaps change that color with user interaction. To do so, use the following function:

```coffee
statusBarModule.setStatusBarState('blackOrWhite')
```

Where `blackOrWhite` is a string of the color of your choice.

# Set the Placement of your Status Bar

Your status bar should always be placed at the top, right hand corner of your application. To do so, use the following function:

```coffee
statusBarModule.setStatusBarPlacement()
```

This function automatically places your status bar in the appropriate position. Call this function at the end of your application to ensure that the status bar stays on top of other layers in your Framer app.

# Set Time

Set the time in your status bar to the current time in your system clock with the following function:

```coffee
statusBarModule.setStatusBarTime()
```

## Upcoming Developments

Support for multiple devices and multi colored status bars are on the horizon. Stay tuned! 
