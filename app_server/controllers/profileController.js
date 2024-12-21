const User = require('../models/User');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.session.userId).select('certifications');
    res.render('profile', { certifications: user.certifications || [] });
  } catch (err) {
    console.error("Error fetching profile data:", err);
    res.status(500).send("Error loading profile.");
  }
};
