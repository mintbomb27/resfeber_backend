const Covid = require("../seeds/covid");



exports.getAll = async (req, res) => {
    //console.log(Dummy.url);
    res.send(Covid.getAll);
};

exports.getForState = async (req, res) => {
    //console.log(Dummy.url);
    res.send(Covid.getAll[req.params.state]);
};

