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
        controlRequest.sendCtrl({
            name: "turn",
            value: on ? "on" : "off"
        });
    }
}

module.exports = {
    initDevice,
    models,
    control,
};