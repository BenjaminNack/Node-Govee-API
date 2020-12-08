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
    setOn: async function(on) {
        return await controlRequest.sendCtrl({
            name: "turn",
            value: on ? "on" : "off"
        }, apikey, device, model);
    },
    setBrightness: async function(brightness) {
        return await controlRequest.sendCtrl({
            name: "brightness",
            value: Math.min(Math.max(brightness, 0), 100)
        }, apikey, device, model);
    },
    setColor: async function(r, g, b) {
        return await controlRequest.sendCtrl({
            name: "color",
            value: { r, g, b }
        }, apikey, device, model);
    },
    setColorTemperature: async function(temperature) {
        return await controlRequest.sendCtrl({
            name: "colorTem",
            value: temperature
        }, apikey, device, model);
    },
}

module.exports = {
    initDevice,
    models,
    control,
};