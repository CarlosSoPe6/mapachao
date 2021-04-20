const express = require('express');
const rootController = require('../controllers/root');

const router = express.Router();

router.get('/', rootController.getMapache);
router.get('/:tag', rootController.getMapacheByTag);

module.exports = router;
