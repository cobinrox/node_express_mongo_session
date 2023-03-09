const express = require('express');

const toolsController = require('../controllers/toolsController');

const router = express.Router();

/**
 * Define routes that map to controllers
 */
router.get('/test', toolsController.getTest);

module.exports = router;