const models = require('./deviceModels');
const control = require('./control');

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
        control.sendCtrl({
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