const pool = require("../config/db");
module.exports = {
   getEvents:(callBack) =>{
    pool.query(
        `select *
         from mdsEvent`,
        (error, results) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
   }
};
