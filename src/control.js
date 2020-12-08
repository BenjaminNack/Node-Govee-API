const superagent = require('superagent');

module.exports = {
    sendCtrl: function(cmd) {
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