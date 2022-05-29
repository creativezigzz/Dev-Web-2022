const pool = require("../config/db");
module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into beer(idBrewery, idType, beerName, degree, isNew, price, quantite)
             values (?, ?, ?, ?, ?, ?, ?)`,
            [
                data.idBrewery,
                data.idType,
                data.beerName,
                data.degree,
                data.isNew,
                data.price,
                data.quantite

            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getbeerByType: (idType, callBack) => {
        pool.query(
            `select *
             from beer
             where idType = ?`,
            [idType],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getbeerByBrewery: (idBrewery, callBack) => {
        pool.query(
            `select *
             from beer
             where idBrewery = ?`,
            [idBrewery],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getBeerOrderedByPrice: callBack => {
        pool.query(
            `select *
             from beer
             order by price`,
            [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getBeerIfContains: (contain, callBack) => {

        pool.query(
            `select idBrewery, idType, beerName, degree, isNew, price, quantite
             from beer
             where beerName like ?`,
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
    getbeerBybeerId: (id, callBack) => {
        pool.query(
            `select idBrewery, idType, beerName, degree, isNew, price
             from beer
             where idBeer = ?`,
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
            `select idBeer,
                    idBrewery,
                    idType,
                    beerName,
                    degree,
                    isNew,
                    price,
                    quantite
             from beer
             order by beerName, quantite`,
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
            `update beer
             set degree=?,
                 beerName=?,
                 price=?
             where idBeer = ?`,
            [
                data.degree,
                data.beerName,
                data.price
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
            `delete
             from beer
             where idbeer = ?`,
            [data.idBeer],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};
