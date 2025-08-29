const express = require('express');
const router = express.Router();
const { signup, login, getProfile, updateProfile } = require('../controllers/authController');
const { signupValidation, loginValidation } = require('../middleware/validation');

// Signup route
router.post('/signup', signup);

// Login route
router.post('/login', login);

// Get user profile
router.get('/profile/:id', getProfile);

// Update user profile
router.put('/profile/:id', updateProfile);

module.exports = router;
