/* GET 'home' page */
const homelist = (req, res) => {
    res.render('courses-list', { title: 'Home' });
   };
   /* GET 'Location info' page */
   const CoursesInfo = (req, res) => {
    res.render('courses-info', { title: 'Courses Info' });
   };
   const pythonCoursesInfo = (req, res) => {
    res.render('pythoninfoinfo', { title: 'Courses Info' });
   };
   /* GET 'Add review' page */
   const addReview = (req, res) => {
    res.render('course-review-form', { title: 'Add review' });
   };
   const cenroll = (req, res) => {
    res.render('cprog', { title: 'Enroll C' });
   };
   const pyenroll = (req, res) => {
    res.render('python', { title: 'Enroll Python' });
   };
   module.exports = {
    homelist,
    CoursesInfo,
    pythonCoursesInfo,
    addReview,
    cenroll,
    pyenroll
   };