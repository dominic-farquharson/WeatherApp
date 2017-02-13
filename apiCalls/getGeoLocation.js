// models
const models = require('../db/models/index');
// importing acios
const axios = require('axios');

let getGeoLocation = (req, res, next) => {
  // geolocation endpoint
  const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.Geo_Location_Key}`;
  // post request to get location
  axios.post(url)
    .then( (response) => {
    console.log('geo data',response);
      // location
      res.locals.address = 'GPS';
      // setting lat to latitude
      res.locals.lat = response.data.location.lat;
      // setting lng to longitude
      res.locals.lng = response.data.location.lng;
      return next();
    })
    .catch( (response) => {
      console.log('error getting location.');
      return next();
    })


}

let convertAddress = (req, res, next) => {
  // grabbing address from query object
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${req.query.address}&key=${process.env.GEOCODE_KEY}`;
  // request to get user lat and lng based on their inputted address or zipcode
  axios.get(url)
    .then( (response) => {
      // grabbing user input from query
      res.locals.address = req.query.address;
      //console.log(response.data.results[0].geometry.location.lat);
      res.locals.lat = response.data.results[0].geometry.location.lat;
      res.locals.lng = response.data.results[0].geometry.location.lng;
      //console.log(res.locals.lat, res.locals.lng);
        return next();
    })
    .catch( (response) => {
      // error message
      console.log('error converting address');
      return next();
    })
}

module.exports = {
  getGeoLocation,
  convertAddress
}
