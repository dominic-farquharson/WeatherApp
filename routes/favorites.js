// importing express
const express = require('express');
// invoking router method
const router = express.Router();
// importing auth helpers custom middleware
const authHelpers = require('../auth/auth-helpers');
// import sequelizer for POST routes
const models = require('../db/models/index');

// importing create favorites middleware
const weatherFavorites = require('../weatherFavorites/favoriteWeather');

// router.get('/', authHelpers.loginRequired, (req,res,next) => {
//   res.send('favorites page');
//
// })

/* Creating Order - Add to Order Button  */
router.post('/favorite', authHelpers.loginRequired, (req, res, next)  => {
  // creating a new favorite based on the user id
  weatherFavorites.addToFavorites(req, res)
  .then((favorite) => {
      res.redirect('/user');
    })
    .catch((err) => { res.status(500).json({ status: 'error' });
  })
});

module.exports = router;
