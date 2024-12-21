const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust the path to match your User model

// Save certificate details
router.post('/saveCertificate', async (req, res) => {
  try {
    const { userId, name, courseName, date } = req.body;

    await User.findByIdAndUpdate(
      userId,
      { $push: { certifications: { name, courseName, date } } }, // Push new certification
      { new: true }
    );

    res.status(200).json({ message: "Certificate saved successfully." });
  } catch (err) {
    console.error("Error saving certificate:", err);
    res.status(500).json({ error: "Failed to save certificate." });
  }
});

module.exports = router;
