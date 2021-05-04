const fetch = require('node-fetch')
require('dotenv').config()

let apiKey = process.env.OTMA_KEY
var placeName = 'new delhi'
module.exports = {
    otmCall: async function(location){
        placeName = location
        var apiURL = `https://api.opentripmap.com/0.1/en/places/geoname?name=${placeName}&apikey=${apiKey}`
        var apiResponse = await fetch(apiURL)
        var jsonResponse = await apiResponse.json()
        let latitude = jsonResponse.lat
        let longitude = jsonResponse.lon
        var apiURL = `https://api.opentripmap.com/0.1/en/places/radius?radius=50000&lon=${longitude}&lat=${latitude}&rate=1&limit=100&apikey=${apiKey}`
        apiResponse = await fetch(apiURL)
        jsonResponse = await apiResponse.json()
        let data = {
            response: jsonResponse,
            lat: latitude,
            lon: longitude
        }
        return data
    }
};