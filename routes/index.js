// importing express
var express = require('express');
// invoking router method from express
var router = express.Router();
// getting weather
const getWeather = require('../apiCalls/getWeather');

/* Home page. Contains custom middleware to do weather api call */
router.get('/', getWeather.getWeather, function(req, res, next) {
  // rendering weatherInfo object containing the weatherData
  res.render('index', { title: 'Weather App', weatherInfo: res.locals.weatherInfo });
});

module.exports = router;
