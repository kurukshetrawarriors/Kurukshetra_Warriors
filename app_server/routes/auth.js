const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing
const User = require('../models/User');

// Sign-up route
router.post('/signup', async (req, res) => {
  const { email, name, password, profession, college } = req.body;

  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document with the hashed password
    const newUser = new User({
      email,
      name,
      password: hashedPassword,  // Store the hashed password
      profession,
      college
    });

    // Save the user document to MongoDB
    await newUser.save();

    // Redirect to profile page or a welcome page after successful sign-up
    res.redirect('/profile');  // Redirect to profile page after sign-up
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating user');
  }
});

module.exports = router;
