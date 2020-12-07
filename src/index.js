const superagent = require('superagent');
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
        superagent
            .put('https://developer-api.govee.com/v1/devices/control')
            .send({  
                device: device,
                model: model,
                cmd: {
                    name: "turn",
                    value: on ? "on" : "off",
                }
            })
            .set('Govee-API-Key', apikey)
            .end((err, res) => {
                console.log(err);
            });
    }
}

module.exports = {
    initDevice,
    models,
    control,
};