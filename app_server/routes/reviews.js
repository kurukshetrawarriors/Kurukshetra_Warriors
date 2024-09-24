const express = require('express');
const router = express.Router();
const CourseReview = require('../models/CourseReview'); // Adjust the path if necessary

// POST route to handle review submission
router.post('/review', async (req, res) => {
    try {
        const { name, rating, review } = req.body;

        const newReview = new CourseReview({ name, rating, review });
        await newReview.save();
        res.redirect('/Courses'); // Adjust redirect as needed
    } catch (error) {
        console.error('Error saving review:', error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
