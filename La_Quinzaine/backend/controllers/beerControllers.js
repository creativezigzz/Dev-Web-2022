const Beer = require('../models/Beer');
const beerRoutes= require('../routes/beerRoutes')

exports.getAllBeers = async (req, res, next) => {
    try{
        const beers = await Beer.findAll();
        res.status(200).json({beers});
    }catch (e){
        console.log(e);
        next(e);
    }

}

exports.addNewBeer = async (req, res, next) => {
    //const beer = new Beer(10, 1, 3, "Karmeliet", 1, 25, 1, 0)
    try{
        let {degree, idbrewery, price, beerName, idtype, quantity, stock, isNew} = req.body;
        let beer = new Beer(degree, idbrewery, price, beerName, idtype, quantity, stock, isNew)

        beer = await beer.save();
        res.status(201).json({message : "Beer added to the database"});
    }catch (e) {
        console.log(e);
        next(e);
    }
}
exports.getBeerById = async (req, res, next) => {
    try{
        let idBeer = req.params.idBeer;
        const beers = await Beer.findById();
        res.status(200).json({beers});
    }catch (e){
        console.log(e);
        next(e);
    }
}
exports.getBeerByName = async (req, res, next) => {
    res.send("Get a specific beer by name Route")
}