require("dotenv").config();
const{
    getAvisByIds
} = require("../models/avis")

module.exports = {
getAvis: (req, res) => {
    const id = req.params.id;

    getAvisByIds(id, (err, results) => {
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
}