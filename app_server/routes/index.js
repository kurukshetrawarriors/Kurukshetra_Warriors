const express = require('express');
const router = express.Router();
const ctrlLocations = 
require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
const ctrlLectures=require('../controllers/lectures');
const ctrlTbpdfs=require('../controllers/tbpdfs')
/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);
/* Other pages */
router.get('/about', ctrlOthers.about);
/* Lectures pages */
router.get('/notes', ctrlLectures.notes);
/*TB pdfs pages*/
router.get('/textbooks', ctrlTbpdfs.textbooks);
module.exports = router;