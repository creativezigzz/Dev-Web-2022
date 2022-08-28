require("dotenv").config();
const{
    getEvents
} = require("../models/mdsEvent")

module.exports = {
    getAllEvents: (req, res) => {
        getEvents((err, results) => {
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
}