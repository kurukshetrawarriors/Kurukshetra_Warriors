/* GET 'home' page */
const homelist = (req, res) => {
    res.render('locations-list', { title: 'Home' });
   };
   /* GET 'Location info' page */
   const locationInfo = (req, res) => {
    res.render('locations-info', { title: 'Location Info' });
   };
   /* GET 'Add review' page */
   const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Add review' });
   };
   module.exports = {
    homelist,
    locationInfo,
    addReview
   };