require("dotenv").config();
const {
    getBeerByBeerId,
    getBeerIfContains,
    getBeers,
    create,
    updateBeer,
    deleteBeer
} = require("../models/beer")

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
            return res.status(201).json({
                success: 1,
                data: results
            });
        });
    },
    getAllBeers: (req, res) => {
        getBeers((err, results) => {
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
    getBeerByBeerId: (req, res) => {
        const id = req.params.id;

        getBeerByBeerId(id, (err, results) => {
                if (err) {
                    console.log(err);
                    return res.status(405);
                }
                if (!results) {
                    return res.status(404).json({
                        success: 0,
                        message: "Record not Found"
                    });
                }
                return res.json({
                    success: 1,
                    data: results
                })


            }
        )
    },
    updateBeer: (req, res) => {

        const id = req.params.id
        getBeerByBeerId(id, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.status(404).json({
                    success: 0,
                    statusCode: 404,
                    message: "Beer not in the database"
                })
            } else {
                const infoBeer= results
                updateBeer(id,req.body, (result,err) => {
                    if (err) {
                        console.log(err);
                        return res.json({
                            success: 0,
                            status: 405,
                            message: 'The Beer was  not updated'
                        });
                    }
                    return res.json({
                        success: 1,
                        message: 'Beer successfully updated',
                        data: infoBeer
                    })
                })
            }
        })
    },
    getBeerIfContains: (req, res) => {
        const contain = req.params.contain;
        getBeerIfContains(contain, (err, results) => {
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
    deleteBeer: (req, res) => {
        const id = req.params.id;
        getBeerByBeerId(id, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.status(404).json({
                    success: 0,
                    statusCode: 404,
                    message: "Beer not in the database"
                })
            } else {
                const infoBeer = results
                deleteBeer(id, (err) => {
                    if (err) {
                        console.log(err);
                        return res.json({
                            success: 0,
                            status: 405,
                            message: 'The Beer was not deleted'
                        });
                    }
                    return res.json({
                        success: 1,
                        message: 'Beer successfully deleted',
                        data: infoBeer
                    })
                })
            }

        })


    }
}