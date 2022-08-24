const pool = require("../config/db");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into user(pseudo, email, password,roles) 
                values(?,?,?,?)`,
            [
                data.pseudo,
                data.email,
                data.password,
                data.roles

            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUserByUserEmail: (email, callBack) => {
        pool.query(
            `select * from user where email = ?`,
            [email],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getUserByUserPseudo: (pseudo, callBack) => {
        pool.query(
            `select * from user where pseudo = ?`,
            [pseudo],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getUserByUserId: (id, callBack) => {
        pool.query(
            `select pseudo, email, password, idUser from user where idUser = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getUsers: callBack => {
        pool.query(
            `select pseudo, email, password, idUser, token from user`,
            [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateUser: (data, callBack) => {
        pool.query(
            `update user set pseudo=?, email=?, password=? where idUser = ?`,
            [
                data.pseudo,
                data.email,
                data.password
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    deleteUser: (data, callBack) => {
        pool.query(
            `delete from user where idUser = ?`,
            [data.id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};