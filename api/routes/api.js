const express = require('express');

const router = express.Router();
const apiController = require('../controllers/api');

router.post('/', apiController.postRoot);

module.exports = router;
