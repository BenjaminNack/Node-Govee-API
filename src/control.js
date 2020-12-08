const superagent = require('superagent');

module.exports = {
    sendCtrl: function(cmd, apikey, device, model) {
        return new Promise(function(resolve, reject) {
            const data = {  
                device,
                model,
                cmd
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
    },
    getStatus: function(apikey, device, model) {
        return new Promise(function(resolve, reject) {
            const data = {
                device,
                model
            };

            superagent
                .get(`https://developer-api.govee.com/v1/devices/state?device=${encodeURI(device)}&model=${encodeURI(model)}`)
                .send(data)
                .set('Govee-API-Key', apikey)
                .end(function (err, res){
                    if(!err){
                        resolve(res.body["data"]);
                    }

                    reject(err);
                });
        });
        
    }
}