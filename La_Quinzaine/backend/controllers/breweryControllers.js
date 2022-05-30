require("dotenv").config();
const {
    getBreweryBybreweryId,
    getbreweryByBrewery,
    getBreweryIfContains,
    getbrewerys,
    getbreweryByType,
    create,
    deletebrewery
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
        getbrewerys((err, results) => {
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
    getBreweryBybreweryId: (req, res) => {
        const id = req.params.id;
        getBreweryBybreweryId(id,(err, results) => {
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