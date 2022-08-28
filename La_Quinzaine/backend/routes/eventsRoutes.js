const express = require('express');
const mdsEventControllers = require('../controllers/mdsEventControllers');
const router = express.Router();

// @route GET && POST - /event/
router
    .route("/")
    .get(mdsEventControllers.getAllEvents)


module.exports = router;