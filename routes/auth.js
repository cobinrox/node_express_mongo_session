const express = require('express');

const authController = require('../controllers/auth');

const router = express.Router();

/**
 * Define routes that map to controllers
 */
router.get('/'       , authController.getLogin);
router.post('/login' , authController.postLogin);
router.get('/welcome', authController.getWelcome);
router.get('/logout' , authController.logout);

module.exports = router;