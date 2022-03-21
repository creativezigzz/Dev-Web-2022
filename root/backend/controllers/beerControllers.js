exports.getAllBeers = async(req, res, next) => {
    res.send("Get all beers route");
}

exports.addNewBeer = async (req, res, next) => {
    res.send("Create New Beer Route")
}
exports.getBeerById= async (req, res, next) => {
    res.send("Get a specific beer by id Route")
}
exports.getBeerByName= async (req, res, next) => {
    res.send("Get a specific beer by name Route")
}