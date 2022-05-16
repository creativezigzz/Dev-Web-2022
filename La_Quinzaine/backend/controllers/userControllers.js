const User = require("../models/User");

module.exports.addNewUser = async (req, res, next) => {
    try{
        console.log(req)
        let {pseudo,email,password} = req.body;
        let user = new User(pseudo, email, password);
        await user.save();
        res.status(201).json({message : "User added to the database"});
    }catch (e) {
        console.log(e);
        next(e);
    }
}

module.exports.getAllUsers = async (req,res,next) =>
{

    try {
        const users = await User.findAll();

        res.status(200).json(users[0]);
    }catch (e) {
        console.log(e);
        next(e);
    }
}