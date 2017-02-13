// importing express
var express = require('express');
// invoking router method from express
var router = express.Router();
// getting weather
const getWeather = require('../apiCalls/getWeather');
// getting GeoLocation
const getGeoLocation = require('../apiCalls/getGeoLocation');


// home page
router.get('/', function(req, res, next) {

  // rendering weatherInfo object containing the weatherData
  res.render('index', {title:'Not signed in'});
});

// home page - button route - converting address
router.get('/weather', getGeoLocation.convertAddress, getWeather.getWeather, function(req, res, next) {
  // rendering weatherInfo object containing the weatherData
  res.render('displayWeather', {title:'GeoCode', weatherInfo:res.locals.weatherInfo});
});

/* Home page. Contains custom middleware to do weather api call and get location of user */
router.get('/location', getGeoLocation.getGeoLocation, getWeather.getWeather, function(req, res, next) {
  console.log(req.body.address);
  // rendering weatherInfo object containing the weatherData
  res.render('index', { title: 'GeoLocation', weatherInfo: res.locals.weatherInfo });
});





module.exports = router;
