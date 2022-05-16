const db = require('../config/db');

class User{
    constructor(pseudo,email,password) {
        this.pseudo = pseudo;
        this.email = email;
        this.password = password;
    }
    async save(){
        let sql = `
            INSERT INTO laquinzaine.user(email, password, pseudo) VALUES 
            ("${this.pseudo}",
             "${this.email}",
             "${this.password}"
             );
        `;
        const [newUser,] = await db.execute(sql);
        return newUser;
    }
    static  findAll(){
        let sql = `SELECT * FROM laquinzaine.user;`;

        return db.execute(sql);
    }
    static findById(idUser){
        let sql = `SELECT * FROM user WHERE iduser = ${idUser}`

        return db.executeSql(sql);
    }
    static findUserPassword(pseudo,password){
        let sql = `SELECT * FROM user WHERE laquinzaine.user.pseudo = "${pseudo}" AND laquinzaine.user.password = "${password}";`;
    return db.execute(sql);
    }

}
module.exports = User;