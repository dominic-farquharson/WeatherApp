// importing express
const express = require('express');
// invoking router
const router = express.Router();

// importing authhelpers
const authHelpers = require('../auth/auth-helpers');

// importing add to favorites middleware
const weatherFavorites = require('../weatherFavorites/favoriteWeather');


router.get('/', authHelpers.loginRequired, weatherFavorites.getFavorites, (req, res, next) => {
  console.log('favorites', res.locals.favorites)
  //console.log(req.user.username);
  res.render('user/index', {
    title:'User page',
    username: req.user.username,
    favorites: res.locals.favorites
  });
  // res.render('user/index', {
  //   user: req.user.dataValues
  // });
});

module.exports = router;
