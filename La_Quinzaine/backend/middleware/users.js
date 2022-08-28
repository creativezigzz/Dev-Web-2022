// middleware/users.js
const jwt = require("jsonwebtoken");
const passwordRegexp = require("password-regexp")();

module.exports = {
    validateRegister: (req, res, next) => {
        // username min length 3
        const reEmail = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")
        if (!req.body.pseudo || req.body.pseudo.length < 5) {
            return res.status(400).send({
                success : 0,
                message: 'Please enter a username with min. 5 chars',
            });
        }
        // password min 6 chars
        let ok = "null"
        if (!req.body.password || !passwordRegexp.test(req.body.password)) {
            return res.status(400).send({
                success: 0,
                message: 'PLease enter a valid password : \n Minimum eight characters, at least one letter, one alphanumeric,' +
                    ' and one number:',
            });
        }


        if (!req.body.email || !req.body.email.match(reEmail)) {
            return res.status(400).send({
                success: 0,
                message: 'Please enter a valid email'
            })
        }

        next();
    }
};