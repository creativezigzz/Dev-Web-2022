const express = require('express');
const userControllers = require('../controllers/userControllers');
const router = express.Router();

// @route GET && POST - /user/
router
    .route("/")
    .get(userControllers.getAllUsers)
    .post(userControllers.addNewUser);

router.route("/:pseudo").get(userControllers.getUserById);

module.exports = router;