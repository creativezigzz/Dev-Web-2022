const express = require('express');
const avisControllers = require('../controllers/avisControllers');
const router = express.Router();

// @route GET && POST - /event/
router
    .route("/:id&:user")
    .get(avisControllers.getAvis)


module.exports = router;