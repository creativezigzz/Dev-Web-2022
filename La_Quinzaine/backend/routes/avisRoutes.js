
const jwt = require("jsonwebtoken");
module.exports = {
    validateRegister: (req, res, next) => {
        // username min length 3
        if (!req.body.pseudo || req.body.pseudo.length < 3) {
            return res.status(400).send({
                msg: 'Please enter a username with min. 3 chars'
            });
        }
        // password min 6 chars
        if (!req.body.password || req.body.password.length < 6) {
            return res.status(400).send({
                msg: 'Please enter a password with min. 6 chars'
            });
        }
        next();
    }
};