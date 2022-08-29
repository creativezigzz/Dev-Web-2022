const pool = require("../config/db");
module.exports = {
   getEvents:(callBack) =>{
    pool.query(
        `select *
         from mdsEvent
         order by eventDate`,
        (error, results) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
   }
};
