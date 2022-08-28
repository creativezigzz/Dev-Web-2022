require("dotenv").config();
const {
    getTypeByTypeId,
    createType,
    getAllType
} = require("../models/type")
module.exports = {
    createType: (req, res) => {
        const body = req.body;
        createType(body, (err, results) => {
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
    getTypeByTypeId: (req, res) => {
        const id = req.params.id;
        getTypeByTypeId(id,(err, results) => {
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
    getAllType: (req, res) => {
        getAllType((err, results) => {
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