const express = require('express');
const beerControllers = require('../controllers/beerControllers');
const router = express.Router();

// @route GET && POST - /beer/
router
    .route("/")
    .get(beerControllers.getAllBeers)
    .post(beerControllers.addNewBeer);

router.route("/:idBeer").get(beerControllers.getBeerById);

module.exports = router;