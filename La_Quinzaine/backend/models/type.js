const pool = require("../config/db");
module.exports = {
    createType: (data, callBack) => {
        pool.query(
            `insert into type(idType, name)
             values (?, ?)`,
            [
                data.idType,
                data.name
            ],
            (error, results,) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getTypeByTypeId: (id, callBack) => {
        pool.query(
            `select name
             from type
             where idType = ?`,
            [id],
            (error, results, ) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getAllType: callBack => {
        pool.query(
            `select idType, name
             from type`,
            [],
            (error, results) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateType: (data, callBack) => {
        pool.query(
            `update type
             set name=?
             where idType = ?`,
            [
                data.name,
                data.idType,
            ],
            (error, results) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    deleteType: (data, callBack) => {

        pool.query(
            `delete
             from type
             where idType = ?`,
            [data.idType],
            (error, results) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};
