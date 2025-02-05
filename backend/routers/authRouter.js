const express = require('express');

const router = express.Router();

// Define your routes here
router.post('/login', (req, res) => {
    // Handle login
    res.json({message: 'Login successful'});
});

router.post('/register', (req, res) => {
    // Handle registration
    res.json({message: 'Registration successful'});
});

module.exports = router;