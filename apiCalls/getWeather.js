// models
const models = require('../db/models/index');
// importing axios
const axios = require('axios');

// function to make api call to get Weather
let getWeather = (req, res, next) => {

  // setting endpoint to a variable
  const url = `https://api.darksky.net/forecast/${process.env.Dark_Sky_Key}/${res.locals.lat},${res.locals.lng}`;
  axios.get(url)
    .then( (response) => {
        // setting weather info response variable to response.data
        res.locals.weatherInfo = response.data;
        console.log('Weather has been retrieved.');
        // calling next middleware
        return next();
    })
    .catch( (response) => {
      // if error
      console.log('invalid request');
      return next();
    })
    // next middleware

}

// exporting getWeather method
module.exports = {
  getWeather
}
