const express = require('express');
const beerControllers = require('../controllers/beerControllers');
const router = express.Router();

// @route GET && POST - /beer/
router
    .route("/")
    .get(beerControllers.getAllBeers)
    .post(beerControllers.createBeer)



router.route("/id/:id")
    .get(beerControllers.getBeerByBeerId)
    .delete(beerControllers.deleteBeer)
    .patch(beerControllers.updateBeer)

router.route("/:contain").get(beerControllers.getBeerIfContains);

module.exports = router;