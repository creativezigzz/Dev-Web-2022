require("dotenv").config();
const {
    getBreweryByBreweryId,
    getBreweryByBrewery,
    getBreweryIfContains,
    getAllBrewery,
    getBreweryByType,
    create,
    deleteBrewery
} = require("../models/brewery")

module.exports = {
    createBrewery: (req, res) => {
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
    getAllBreweries: (req, res) => {
        getAllBrewery((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getBreweryByBreweryId: (req, res) => {
        const id = req.params.id;
        getBreweryByBreweryId(id,(err, results) => {
                if (err) {
                    console.log(err);
                    return res.status(405);
                }
                return res.json({
                    success: 1,
                    data: results
                })
            }
        )
    },
    getBreweryIfContains: (req, res) => {
        const contain = req.params.contain;
        getBreweryIfContains(contain ,(err, results) => {
                if (err) {
                    console.log(err);
                    return res.status(405);
                }
                return res.json({
                    success: 1,
                    data: results
                })
            }
        )
    }
}