require("dotenv").config();
const {
    create,
    getUserByUserEmail,
    getUserByUserPseudo,
    getUserByUserId,
    getUsers,
    updateUser,
    deleteUser
} = require("../models/users");
const {hashSync, genSaltSync, compareSync} = require("bcrypt");
const {sign} = require("jsonwebtoken");

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        //test pour voir si il existe deja un user
        getUserByUserPseudo(body.pseudo, (err, results) => {
                if (err) {
                    console.log(err);
                }
                if (results) {
                    return res.status(405).json({
                        success: 0,
                        statusCode: 405,
                        message: "A person with this pseudo already exist, please provide another pseudo"
                    });
                }
                getUserByUserEmail(body.email, (err, results) => {
                        if (err) {
                            console.log(err);
                        }
                        if (results) {
                            return res.status(405).json({
                                success: 0,
                                statusCode: 405,
                                message: "A person with this email already exist, please provide another email"
                            });
                        }
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
                    }
                )

            }
        )

    },
    login: (req, res) => {
        const body = req.body;
        console.log(body);
        getUserByUserPseudo(body.pseudo, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.status(405).json({
                    success: false,
                    statusCode: 405,
                    message: "Invalid pseudo or password"
                });
            }
            const result = compareSync(body.password, results.password);
            if (result) {
                results.password = undefined;
                const jsontoken = sign({result: results}, process.env.JWT_KEY, {
                    expiresIn: "1h"
                });
                return res.status(200).json({
                    success: 1,
                    message: "Login successfully",
                    token: jsontoken,
                    statusCode: 200,
                    roles: results.roles
                });
            } else {
                return res.status(405).json({
                    success: 0,
                    statusCode: 405,
                    message: "Invalid email or password"
                });
            }
        });
    },
    getUserByUserId: (req, res) => {
        const id = req.params.id;

        getUserByUserId(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record not Found"
                });
            }
            results.password = undefined;
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getUsers: (req, res) => {
        getUsers((err, results) => {
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
    updateUsers: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        updateUser(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(405).json(
                    {
                        success: 0,
                        message: "Cannot update the client"
                    }
                )
            }
            return res.json({
                success: 1,
                message: "updated successfully"
            });
        });
    },
    deleteUser: (req, res) => {
        const id = req.params.id;
        console.log(id);
        deleteUser(id, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "user deleted successfully"
            });
        });
    }
};