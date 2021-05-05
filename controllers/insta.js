const Dummy = require("../seeds/dummy");



exports.get = async (req, res) => {
    //console.log(Dummy.url);


    res.send(Dummy.url);
};


