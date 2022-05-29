require("dotenv").config();
const {
    getbeerBybeerId,
    getbeerByBrewery,
    getbeers,
    getbeerByType,
    create,
    deletebeer
} = require("../models/beer")
const beerRoutes = require('../routes/beerRoutes')
const {getUsers} = require("../models/users");

module.exports = {
    createBeer: (req, res) => {
        const body = req.body;
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection errror"
                });

            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getAllBeers: (req, res) => {
        getbeers((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    }
}