const distance = require('google-distance');
const {Client} = require("@googlemaps/google-maps-services-js");

const client = new Client({});
const distanciaCtrl = {};

//client.distancematrix()
distance.apiKey = process.env.API_KEY;

function encuentraDistancia(origin, destination){
    return new Promise((resolve, reject) => {
        distance.get(
            {
                origin: origin,
                destination: destination,
                
            },
            function(err, data) {
                if (err) reject(err);
            resolve(data);
            }
        )
    })
}

distanciaCtrl.informaDistancia = (req, res) => {
    const { origin, destination } = req.body;
    console.log(origin, destination);
    encuentraDistancia(origin, destination)
    .then(result => {
        console.log(result);
        res.json({distance: result});
    })
    .catch(errResult => {
        console.log(errResult)
    });
}

module.exports = distanciaCtrl;