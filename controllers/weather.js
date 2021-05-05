const fetch = require('node-fetch')
require('dotenv').config()

let apiKey = process.env.OWA_KEY

module.exports =  {
    weather: async function(location,lat,lon){
        //Fetching Weather Data from Weather API
        let placeName = location
        var apiURL = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${apiKey}`
        var apiResponse = await fetch(apiURL)
        var jsonResponse = await apiResponse.json()
        //Formatting Required Details
        let wdata = {
            weather:{
                desc: jsonResponse.current.weather[0].main,
                temp: parseInt(jsonResponse.current.temp-273.15),
                wind: jsonResponse.current.wind_speed,
                pop: jsonResponse.hourly[0].pop*100
            }
        }
        let desc = wdata.weather.desc.toLowerCase()
        let checklist = []
        if(desc.includes('snow')){
            checklist.push(['jackets', 'muffler', 'woollen clothes', 'skii', 'boots'])
        } else if (desc.includes('sunny')){
            checklist.push(['cotton clothes', 'flip flops'])
        } else if (desc.includes('rain')){
            checklist.push(['umbrella', 'rain coat', 'caps'])
        }
        let check = {
            checklist: checklist
        }
        let data = Object.assign({}, wdata, check)
        return data
    }
};