const models = require('./deviceModels');
const controlRequest = require('./control');

let apikey = '';
let device = '';
let model = '';

function initDevice(key, macaddress, deviceModel){
    apikey = key;
    device = macaddress;
    model = deviceModel;
}

const control = {
    setOn: function(on) {
        return controlRequest.sendCtrl({
            name: "turn",
            value: on ? "on" : "off"
        }, apikey, device, model);
    },
    setBrightness: function(brightness) {
        return controlRequest.sendCtrl({
            name: "brightness",
            value: Math.min(Math.max(brightness, 0), 100)
        }, apikey, device, model);
    },
    setColor: function(r, g, b) {
        return controlRequest.sendCtrl({
            name: "color",
            value: { r, g, b }
        }, apikey, device, model);
    },
    setColorTemperature: function(temperature) {
        return controlRequest.sendCtrl({
            name: "colorTem",
            value: temperature
        }, apikey, device, model);
    },
}

const status = {
    getDeviceStatus: function() {
        return controlRequest.getStatus(apikey, device, model)
    }
}

module.exports = {
    initDevice,
    models,
    control,
    status,
};