/* GET 'home' page */
const homelist = (req, res) => {
    res.render('courses-list', { title: 'Home' });
   };
   /* GET 'Location info' page */
   const CoursesInfo = (req, res) => {
    res.render('courses-info', { title: 'Courses Info' });
   };
   /* GET 'Add review' page */
   const addReview = (req, res) => {
    res.render('course-review-form', { title: 'Add review' });
   };
   module.exports = {
    homelist,
    CoursesInfo,
    addReview
   };