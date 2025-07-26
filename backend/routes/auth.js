// routes/auth.js
const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

// As per the test script, a registration endpoint is needed.
router.post('/register', registerUser);

// The primary login endpoint from the project description.
router.post('/login', loginUser);

module.exports = router;