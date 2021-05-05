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
        let checklist = new Set()
        if(desc.includes('snow')){
            //checklist.add(['jackets', 'woollen clothes', 'boots'])
            checklist.add('jackets')
            checklist.add('woollen clothes')
            checklist.add('boots')
            
        } else if (desc.includes('sunny')){
            //checklist.add(['cotton clothes', 'flip flops'])
            checklist.add('cotton clothes')
            checklist.add('flip flops')
        } else if (desc.includes('rain')){
            //checklist.add(['umbrella', 'rain coat', 'caps'])
            checklist.add('umbrella')
            checklist.add('caps')
            checklist.add('rain coat')
        }
        let check = {
            weatherRecomendations: Array.from(checklist)
        }
        let data = Object.assign({}, wdata, check)
        return data
    }
};