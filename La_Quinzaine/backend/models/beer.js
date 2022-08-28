const pool = require("../config/db");
module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into beer(idBrewery, idType, beerName, degree, isNew, price, quantite,imageUrl)
             values (?, ?, ?, ?, ?, ?, ?,?)`,
            [
                data.idBrewery,
                data.idType,
                data.beerName,
                data.degree,
                data.isNew,
                data.price,
                data.quantite,
                data.imageUrl

            ],
            (error, results) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getBeerByType: (idType, callBack) => {
        pool.query(
            `select *
             from beer
             where idType = ?`,
            [idType],
            (error, results) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getBeerByBrewery: (idBrewery, callBack) => {
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
            `select idBrewery, idType, beerName, degree, isNew, price, quantite,imageUrl
             from beer
             where beerName like ?`,
            ['%' + contain + '%'],
            (error, results) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    }
    ,
    getBeerByBeerId: (id, callBack) => {
        pool.query(
            `select idBrewery, idType, beerName, degree, isNew, price,imageUrl,quantite
             from beer
             where idBeer = ?`,
            [id],
            (error, results) => {
                if (error) {
                    callBack(error);
                }
                    return callBack(null, results[0]);

            }
        );
    },
    getBeers: callBack => {
        pool.query(
            `select idBeer,
                    idBrewery,
                    idType,
                    beerName,
                    degree,
                    isNew,
                    price,
                    quantite,
                    imageUrl
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
    updateBeer: (id,toUpdate, callBack) => {
        pool.query(
            `update beer
             set degree=?,
                 beerName=?,
                 price=?
             where idBeer = ?`,
            [toUpdate.degree,toUpdate.beerName,toUpdate.price,
                id
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    deleteBeer: (idBeer, callBack) => {

        pool.query(
            `delete
             from beer
             where idBeer = ?`,
            [idBeer],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};
