const pool = require("../config/db");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into beer( idBrewery, idType, beerName, degree, isNew) 
                values(?,?,?,?,?)`,
            [
                data.idBrewery,
                data.idtype,
                data.beerName,
                data.degree,
                data.isNew

            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getbeerBybeerEmail: (email, callBack) => {
        pool.query(
            `select * from beer where email = ?`,
            [email],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getbeerBybeerPseudo: (pseudo, callBack) => {
        pool.query(
            `select * from beer where pseudo = ?`,
            [pseudo],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getbeerBybeerId: (id, callBack) => {
        pool.query(
            `select pseudo, email, password, idbeer from beer where idbeer = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getbeers: callBack => {
        pool.query(
            `select pseudo, email, password, idbeer, token from beer`,
            [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updatebeer: (data, callBack) => {
        pool.query(
            `update beer set pseudo=?, email=?, password=? where idbeer = ?`,
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
    deletebeer: (data, callBack) => {
        pool.query(
            `delete from beer where idbeer = ?`,
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