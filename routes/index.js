// importing express
var express = require('express');
// invoking router method from express
var router = express.Router();
// getting weather
const getWeather = require('../apiCalls/getWeather');
// getting GeoLocation
const getGeoLocation = require('../apiCalls/getGeoLocation');

/* Home page. Contains custom middleware to do weather api call and get location of user */
router.get('/id', getGeoLocation.getGeoLocation, getWeather.getWeather, function(req, res, next) {
  // rendering weatherInfo object containing the weatherData
  res.render('index', { title: 'Weather App', weatherInfo: res.locals.weatherInfo });
});

// home page
router.get('/', function(req, res, next) {
  // rendering weatherInfo object containing the weatherData
  res.render('index');
});

module.exports = router;
