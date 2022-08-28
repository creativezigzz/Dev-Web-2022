const pool = require("../config/db");
module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into brewery(breweryDescript, breweryName, urlImage)
             values (?, ?, ?)`,
            [
                data.breweryDescript,
                data.breweryName,
                data.urlImage


            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getBreweryIfContains: (contain, callBack) => {

        pool.query(
            `select idBrewery, breweryDescript, breweryName, urlImage
             from brewery
             where breweryName like ?`,
            ['%' + contain + '%'],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
    ,
    getBreweryByBreweryId: (id, callBack) => {
        pool.query(
            `select idBrewery, breweryDescript, breweryName, urlImage
             from brewery
             where idBrewery = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getAllBrewery: callBack => {
        pool.query(
            `select idBrewery, breweryDescript, breweryName, urlImage
             from brewery`,
            [],
            (error, results) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateBrewery: (data, callBack) => {
        pool.query(
            `update brewery
             set breweryDescript=?,
                 breweryName=?,
                 urlImage=?
             where idBrewery = ?`,
            [
                data.breweryDescript,
                data.breweryName,
                data.urlImage
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    deleteBrewery: (data, callBack) => {

        pool.query(
            `delete
             from brewery
             where idbrewery = ?`,
            [data.idBrewery],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};
