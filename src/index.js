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
    /**
     * @param {boolean} on
     * @returns Request promise
     * @summary Turns the light on or off
     */
    setOn: function(on) {
        return controlRequest.sendCtrl({
            name: "turn",
            value: on ? "on" : "off"
        }, apikey, device, model);
    },
    /**
     * @param {Number} brightness
     * @returns Request promise
     * @summary Set the brightness of the light in a range of 0-100
     */
    setBrightness: function(brightness) {
        return controlRequest.sendCtrl({
            name: "brightness",
            value: Math.min(Math.max(brightness, 0), 100)
        }, apikey, device, model);
    },
    /**
     * @param {Number} r Red value      0-255
     * @param {Number} g Green value    0-255
     * @param {Number} b Blue value     0-255
     * @returns Request promise
     * @summary Set the color of the light
     */
    setColor: function(r, g, b) {
        return controlRequest.sendCtrl({
            name: "color",
            value: { r, g, b }
        }, apikey, device, model);
    },
    /**
     * @param {Number} temperature Color temperature in kelvin 0-12000
     * @returns Request promise
     * @summary Set the color temperature of the light
     */
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