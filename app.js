var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
require("./app_api/models/db"); // Ensure your MongoDB connection is set up here
const authRoutes = require('./app_server/routes/auth'); // Import the auth routes
const authprofRoutes=require('./app_server/routes/authprof');
const reviewRoutes = require('./app_server/routes/reviews'); // Import the review routes
const profileRoutes = require('./app_server/routes/profile'); // Import your profile routes

var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
const userlistRoutes = require('./app_server/routes/userslist');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Use the defined routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRoutes);
app.use('/authprof',authprofRoutes);
app.use('/Courses', reviewRoutes); // Add review routes under /Courses
app.use('/profile', profileRoutes);
app.use('/userslist', userlistRoutes);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/* Start the server (optional)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});*/

module.exports = app;
