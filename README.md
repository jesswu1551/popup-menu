# @ui-widgets-js/popup-menu

Simple, lightweight, framework-independent, and easy-to-use popup menu UI widget for web applications.

<img src="https://raw.githubusercontent.com/web-components-js/popup-menu/HEAD/screenshot1.png" height="30%" width="30%">
<img src="https://raw.githubusercontent.com/web-components-js/popup-menu/HEAD/screenshot2.png" height="30%" width="30%">

## Viewing Demo Application

First, run `npm install` to install all development dependencies. Then run `npm start` to start the demo application in the default browser.

## Installing from NPM

```
  npm install @ui-widgets-js/popup-menu
```

## Using PopupMenu in your application

Check <a href="https://github.com/ui-widgets-js/popup-menu/blob/master/demo/index.js">demo/index.js</a> for the full example code.

```
  import PopupMenu, { PopupMenuItem, PopupMenuPosition } from './popup-menu.js';

  // This example shows how to display PopupMenu under the specific button
  const myButton = document.getElementById('myButton');
  const itemList = [
    new PopupMenuItem(1, 'Menu item One', './images/image-one.svg'),
    new PopupMenuItem(2, 'Menu item Two', './images/image-two.svg'),
    new PopupMenuItem(3, 'Menu item Three'),
    new PopupMenuItem(3, 'Menu item Four')
  ];
  const position = PopupMenuPosition.alignBottomLeft(myButton);
  const selectedId = await PopupMenu.show(itemList, position);
```

## License

<a href="https://github.com/ui-widgets-js/popup-menu/blob/master/LICENSE">MIT License</a>