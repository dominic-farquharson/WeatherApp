// models
const models = require('../db/models/index');

// function to make api call to get Weather
let getWeather = (req, res, next) => {
  console.log('hello');
   return next();
}

// exporting getWeather method
module.exports = {
  getWeather
}
