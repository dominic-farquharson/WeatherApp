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
  let username = null;
  if (req.user) {
    username=req.user.username;
  }
  // rendering weatherInfo object containing the weatherData
  res.render('index', {title:'Search', username:username});
});

// home page - button route - converting address
router.get('/weather', getGeoLocation.convertAddress, getWeather.getWeather, function(req, res, next) {
  let username = null;
  if (req.user) {
    username=req.user.username;
  }
  // rendering weatherInfo object containing the weatherData
  res.render('displayWeather', {title:'Weather', weatherInfo:res.locals.weatherInfo, address:res.locals.address, username:username});
});

/* Home page. Contains custom middleware to do weather api call and get location of user */
router.get('/location', getGeoLocation.getGeoLocation, getWeather.getWeather, function(req, res, next) {
  let username = null;
  if (req.user) {
    username=req.user.username;
  }
  //console.log(req.body.address);
  // rendering weatherInfo object containing the weatherData
  res.render('displayWeather', { title: 'GeoLocation', weatherInfo: res.locals.weatherInfo, address:res.locals.address, username:username });
});





module.exports = router;
