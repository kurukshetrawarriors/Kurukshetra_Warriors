// In your routes file (e.g., auth.js)
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust the path as necessary

// Route to display users
router.get('/userslist', async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the User collection
    res.render('users', { users }); // Render the 'users' Jade file and pass the users data
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving users');
  }
});

module.exports = router;
