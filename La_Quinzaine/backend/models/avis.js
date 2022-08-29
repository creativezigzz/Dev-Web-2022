const pool = require("../config/db");
module.exports = {
   getAvisByIds:(callBack) =>{
    pool.query(
        `select note
         from avis
         where idBeer=? and idUser=? `,
         [
            data.idBeer,
            data.idUser,
        ],
        (error, results) => {
            if (error) {
                callBack(error);
            }
            return callBack(null, results);
        }
    );
   }
};
