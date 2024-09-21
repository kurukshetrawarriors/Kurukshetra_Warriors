const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Sign-up route
router.post('/signup', async (req, res) => {
  const { email, name, password, profession, college } = req.body;

  try {
    // Create a new user document
    const newUser = new User({
      email,
      name,
      password,  // Note: In production, you should hash the password before saving
      profession,
      college
    });

    // Save the user document to MongoDB
    await newUser.save();

    // Respond with a success message
    res.status(201).send('User created successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating user');
  }
});

module.exports = router;
