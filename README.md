# Node-Govee-API
Easily control your govee lights with nodejs!
## Installation
Simply use ```npm install govee-api``` inside your node project directory.
## Examples
1. In this example it just simply turns the light on
```javascript
const govee = require('govee-api');

govee.initDevice("GOVEE_SUPPLIED_API_KEY", "DEVICE MAC ADDRESS", "DEVICE MODEL");

govee.control.setOn(true);
```
2. In this example it sets the color to red
```javascript
const govee = require('govee-api');

govee.initDevice("GOVEE_SUPPLIED_API_KEY", "DEVICE MAC ADDRESS", "DEVICE MODEL");

govee.control.setColor(255, 0, 0);
```

# Documentation
[Documentation](Documentation.md)