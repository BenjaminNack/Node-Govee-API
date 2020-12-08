const superagent = require('superagent');
const models = require('./deviceModels');

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
        return new Promise(function(resolve, reject) {
            const data = {  
                device: device,
                model: model,
                cmd: {
                    name: "turn",
                    value: on ? "on" : "off",
                }
            };
    
            superagent
                .put('https://developer-api.govee.com/v1/devices/control')
                .send(data)
                .set('Govee-API-Key', apikey)
                .end(function (err, res){
                    if(!err){
                        resolve(res);
                    }

                    reject(err);
                });
        });
    }
}

module.exports = {
    initDevice,
    models,
    control,
};