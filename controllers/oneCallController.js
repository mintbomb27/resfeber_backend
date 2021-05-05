//Merging all the APIs here
const otmAPI = require('./otma')
const weatherAPI = require('./weather')
const instAPI = require('./insta')

exports.get = async (req,res) => {
    let otm = await otmAPI.otmCall(req.params.location)
    let lat = otm.lat, lon = otm.lon, otmResponse = otm.checklist
    let weatherResponse = await weatherAPI.weather(req.params.location, lat, lon)
    let instaResponse = await instAPI.get_feed(req.params.location)
    let data = Object.assign({}, weatherResponse, instaResponse, otmResponse)
    return res.status(200).send(data)
}