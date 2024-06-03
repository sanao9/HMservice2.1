const express = require('express');
const router = express.Router();
const { register, login, logout, userProfile } = require('../controllers/authController');
const { isAuthenticated } = require("../middleware/auths");

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile/:id', isAuthenticated, userProfile);

module.exports = router;
