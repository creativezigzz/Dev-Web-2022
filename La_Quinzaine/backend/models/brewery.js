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
    getBreweryBybreweryId: (id, callBack) => {
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
    getbrewerys: callBack => {
        pool.query(
            `select idBrewery, breweryDescript, breweryName, urlImage
             from brewery
             order by breweryName`,
            [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updatebrewery: (data, callBack) => {
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
    deletebrewery: (data, callBack) => {

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
