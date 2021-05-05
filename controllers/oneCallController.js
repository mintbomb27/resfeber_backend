//Merging all the APIs here
const otmAPI = require('./otma')
const weatherAPI = require('./weather')
const instAPI = require('./insta')
const covidAPI = require('./covid')


var NodeGeocoder = require("node-geocoder");

exports.get = async (req,res) => {
    let otm = await otmAPI.otmCall(req.params.location)
    let lat = otm.lat, lon = otm.lon, otmResponse = otm.checklist
    console.log("OTM response:",otm)

    var geocoder = NodeGeocoder({provider: "openstreetmap"});
    let stateData = await geocoder.reverse({ lat: lat, lon: lon })
    let state = stateData[0].state;
    console.log("State:",state);

    let weatherResponse = await weatherAPI.weather(req.params.location, lat, lon)
    console.log("Weather res :",weatherResponse);

    let instaResponse = await instAPI.get_feed(req.params.location)
    console.log("Insta links :",instaResponse);

    let covidResponse = await covidAPI.getForState(state)
    console.log("covid res :",covidResponse);

    let data = Object.assign({}, weatherResponse, instaResponse, otmResponse, covidResponse)
    return res.status(200).send(data)
}