const db = require('../config/db');

class User{
    constructor(pseudo,email,password,idBeer) {
        this.pseudo = pseudo;
        this.email = email;
        this.password = password;
        this.idBeer = idBeer;
    }
    async save(){
        let sql = `
            insert into laquinzaine.user(pseudo, email, password) VALUES 
            ("${this.pseudo}",
             "${this.email}",
             "${this.password}"
             );
        `;
        const [newUser, _] = await db.executeSql(sql);
        return newUser;
    }
    static  findAll(){
        let sql = `SELECT * FROM laquinzaine.user;`;

        return db.executeSql(sql);
    }
    static findById(idUser){
        let sql = `SELECT * FROM user WHERE iduser = ${idUser}`

        return db.executeSql(sql);
    }
    static findUserPassword(pseudo,password){
        let sql = `SELECT * FROM user WHERE laquinzaine.user.pseudo = "${pseudo}" AND laquinzaine.user.password = "${password}";`;
    return db.executeSql(sql);
    }

}
module.exports = User;