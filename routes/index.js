// importing express
var express = require('express');
// invoking router method from express
var router = express.Router();
// getting weather
const getWeather = require('../apiCalls/getWeather');

/* GET home page. */
router.get('/', getWeather.getWeather, function(req, res, next) {
  console.log('response',res.locals.weatherInfo);
  res.render('index', { title: 'Weather App', weatherInfo: res.locals.weatherInfo });
});

module.exports = router;
