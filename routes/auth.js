// importing express
const express = require('express');
// invoking router
const router = express.Router();

// importing authhelpers
const authHelpers = require('../auth/auth-helpers');
// importing passport
const passport = require('../auth/local');

// register route
router.get('/register', authHelpers.loginRedirect, (req, res)=> {
  res.redirect('auth/register');
});

// login route
router.get('/login', authHelpers.loginRedirect, (req, res)=> {
  res.redirect('auth/login');
});

// route to  creating a new user
router.post('/register', (req, res, next)  => {
  authHelpers.createUser(req, res)
  .then((user) => {
    req.login(user, (err) => {
      if (err) return next(err);

      res.redirect('/user');
    });
  })
  .catch((err) => { res.status(500).json({ status: 'error' }); });
});

// Authenticating user
router.post('/login', passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/auth/login',
    failureFlash: true
  })
);

// log out route
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// redirects users who are not logged in
module.exports = router;
