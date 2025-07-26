// controllers/authController.js
const User = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Utility to generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// @desc    Register a new user
// @route   POST /register
// @access  Public
const registerUser = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Please provide username and password' });
    }

    try {
        const userExists = await User.findOne({ username });

        if (userExists) {
            return res.status(409).json({ message: 'User already exists' }); // 409 Conflict
        }

        const user = await User.create({ username, password });

        if (user) {
            res.status(201).json({ // 201 Created
                _id: user._id,
                username: user.username,
                message: 'User registered successfully',
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


// @desc    Authenticate user & get token
// @route   POST /login
// @access  Public
const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (user && (await user.matchPassword(password))) {
            res.status(200).json({ // 200 OK
                access_token: generateToken(user._id),
            });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = { registerUser, loginUser };