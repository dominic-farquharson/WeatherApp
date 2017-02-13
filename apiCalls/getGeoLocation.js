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
      console.log('getting geo location');
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

module.exports = {
  getGeoLocation
}
