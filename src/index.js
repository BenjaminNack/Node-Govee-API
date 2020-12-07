const request = require("request");
const models = require('./deviceModels');

let apikey = '';
let device = '';
let model = '';

function initDevice(key, macaddress, model){
    apikey = key;
    device = macaddress;
    model = model;
}

const control = {
    setOn: function(on) {
        request('https://developer-api.govee.com/v1/devices/control', 
            { 
                ethod: 'PUT', 
                headers: {
                    'Content-Type': 'application/json',
                    'Govee-API-Key': apikey
                },
                formData: {
                    device,
                    model,
                    cmd: {
                        name: "turn",
                        value: on ? "on" : "off",
                    }
                }
            }
        );
    }
}

module.exports = {
    initDevice,
    models,
    control,
};