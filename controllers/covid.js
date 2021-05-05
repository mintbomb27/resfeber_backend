const Covid = require("../seeds/covid");

exports.getAll = async (req, res) => {
    //console.log(Dummy.url);
    res.send(Covid.getAll);
};

exports.getForState = async (state) => {
   
    //console.log("covid data: ",Covid.getAll[state]);
    return {covidGuide:Covid.getAll[state]}  ;
};

