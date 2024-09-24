const mongoose = require('mongoose');

const CourseReviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    review: { type: String, required: true }
});

const CourseReview = mongoose.model('CourseReview', CourseReviewSchema);

module.exports = CourseReview;
