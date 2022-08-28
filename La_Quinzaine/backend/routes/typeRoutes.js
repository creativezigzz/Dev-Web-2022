const express = require('express');
const typeControllers = require('../controllers/typeControllers');
const router = express.Router();

// @route GET && POST - /type/
router
    .route("/")
    .get(typeControllers.getAllType)
    .post(typeControllers.createType);


router.route("/id/:id").get(typeControllers.getTypeByTypeId);
module.exports = router;
