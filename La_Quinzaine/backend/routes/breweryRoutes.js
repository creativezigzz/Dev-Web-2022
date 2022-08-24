const express = require('express');
const breweryControllers = require('../controllers/breweryControllers');
const router = express.Router();

// @route GET && POST - /brewery/
router
    .route("/")
    .get(breweryControllers.getAllBreweries)
    .post(breweryControllers.createBrewery);


router.route("/id/:id").get(breweryControllers.getBreweryByBreweryId);
router.route("/:contain").get(breweryControllers.getBreweryIfContains);
module.exports = router;