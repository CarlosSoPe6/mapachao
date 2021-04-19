const express = require('express');
const apiController = require('../controllers/api');

const router = express.Router();

router.post('/', apiController.postRoot);

module.exports = router;
