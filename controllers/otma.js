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
        var apiURL = `https://api.opentripmap.com/0.1/en/places/radius?radius=50000&lon=${longitude}&lat=${latitude}&rate=3&limit=100&apikey=${apiKey}`
        apiResponse = await fetch(apiURL)
        jsonResponse = await apiResponse.json()
        let checklist = []
        //otma
        //beaches: beachside SPF, shades, swimsuit, towels
        //mountain: sports shoes, trekking gear, muffler
        //temple: religious attire, agarbathi
        //weather
        //snow: jackets, muffler, woollen clothes, skii, boots
        //sunny: cotton clothes, flip flops
        //rain: umbrella, rain coat, caps
        let count = jsonResponse.features.length
        for(var i=0;i<count; i++){
            var kinds = jsonResponse.features[i].properties.kinds
            if(kinds.includes('beach')){
                checklist.push([ 'SPF', 'shades', 'swimsuit', 'towels'])
            }
            if(kinds.includes('mountain')){
                checklist.push([ 'sports shoes', 'trekking gear', 'muffler'])
            } if (kinds.includes('temple')){
                checklist.push([ 'religious attire', 'agarbathi'])
            }
        }
        let data = {
            checklist: checklist,
            lat: latitude,
            lon: longitude
        }
        return data
    }
};