const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // Import bcrypt for password comparison
const User = require('../models/User');

// Sign-in route
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    
    // If the user does not exist, send an error response
    if (!user) {
      return res.status(400).send('User with this email does not exist.');
    }

    // Compare the submitted password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(password, user.password);
    
    // If the password does not match, send an error response
    if (!isMatch) {
      return res.status(400).send('Invalid password.');
    }

    // If sign-in is successful, redirect to the profile page
    res.redirect('/profile');  // Redirect to the profile page after successful sign-in
  } catch (error) {
    console.error(error);
    res.status(500).send('Error during sign-in.');
  }
});

module.exports = router;
