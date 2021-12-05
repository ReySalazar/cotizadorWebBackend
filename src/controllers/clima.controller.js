
const climaCtrl = {};
const https = require('https');
const apikey = process.env.API_KEY_CLIMA;
const location = "Ciudad Autónoma de Buenos Aires";
const api = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + apikey + "&lang=sp";

climaCtrl.getClima = (req, res) =>{

    https.get(api, function(response){
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const clima = weatherData.weather[0].main;
            console.log(clima);
            res.json({clima: clima});
        });      
    })

}

module.exports = climaCtrl;