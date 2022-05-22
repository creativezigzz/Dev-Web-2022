const User = require("../models/User");
exports.addNewUser = async (req, res, next) => {
    //const user = new User(10, 1, 3, "Karmeliet", 1, 25, 1, 0)
    try{
        let {pseudo,email,password} = req.body;
        let user = new User(pseudo, email, password);

        user = await user.save();
        res.status(201).json({message : "User added to the database"});
    }catch (e) {
        console.log(e);
        next(e);
    }
}