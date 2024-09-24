const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Middleware to check if user is authenticated
function ensureAuthenticated(req, res, next) {
  if (req.session.userId) {
    return next();
  }
  res.redirect('/signin');
}

// Profile route
router.get('/profile', ensureAuthenticated, async (req, res) => {
  try {
    const user = await User.findById(req.session.userId);

    if (!user) {
      return res.status(404).send('User not found');
    }

    // Render the profile view and pass the user object
    res.render('profile', { user });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving user profile');
  }
});

module.exports = router;
