const fetch = require('node-fetch')
require('dotenv').config()

let apiKey = process.env.OWMA_KEY
var placeName = 'new delhi'
exports.get = async (req, res) => {
    placeName = req.params.location
    var apiURL = `https://api.opentripmap.com/0.1/en/places/geoname?name=${placeName}&country=IN&apikey=${apiKey}`
    var apiResponse = await fetch(apiURL)
    var jsonResponse = await apiResponse.json()
    let latitude = jsonResponse.lat
    let longitude = jsonResponse.lon
    var apiURL = `https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=${longitude}&lat=${latitude}&rate=1&limit=10&apikey=${apiKey}`
    apiResponse = await fetch(apiURL)
    jsonResponse = await apiResponse.json()
    return res.status(200).send(jsonResponse)
};