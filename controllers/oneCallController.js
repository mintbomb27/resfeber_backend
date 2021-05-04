//Merging all the APIs here
const otmAPI = require('./otma')
const weatherAPI = require('./weather')

exports.get = async (req,res) => {
    let otm = await otmAPI.otmCall(req.params.location)
    let lat = otm.lat, lon = otm.lon, otmResponse = otm.response
    let weatherResponse = await weatherAPI.weather(req.params.location, lat, lon)
    let data = Object.assign({}, weatherResponse, otmResponse)
    return res.status(200).send(data)
}