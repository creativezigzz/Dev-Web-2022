const db = require('../config/db');

class Beer{
    constructor(degree,idbrewery,price,beerName,idtype,quantity,stock,isNew) {
        this.degree = degree;
        this.idbrewery = idbrewery;
        this.price = price;
        this.beerName = beerName;
        this.idtype = idtype;
        this.quantity = quantity;
        this.stock = stock;
        this.isNew =isNew;
    }
    async save(){
        let sql = `
            insert into beer (degree, idbrewery, price, beerName, idtype, quantity, stock, isNew)
            values (${this.degree},
                    ${this.idbrewery},
                    ${this.price},
                    "${this.beerName}",
                    ${this.idtype},
                    ${this.quantity},
                    ${this.stock},
                    ${this.isNew}
                   )
        `;
        const [newBeer, _] = await db.execute(sql);
        return newBeer;
    }
    static findAll(){
        let sql = `SELECT * FROM beer;`;

        return db.executeSql(sql);
    }
    static findById(idBeer){
        let sql = `SELECT * FROM beer WHERE idBeer ${idBeer};`;

        return db.execute(sql);
    }
}
module.exports = Beer;