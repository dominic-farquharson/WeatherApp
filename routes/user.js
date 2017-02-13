// importing express
const express = require('express');
// invoking router
const router = express.Router();

// importing authhelpers
const authHelpers = require('../auth/auth-helpers');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', authHelpers.loginRequired, (req, res, next) => {
  //console.log(req.user.username);
  res.render('user/index', {
    title:'User page',
    username: req.user.username
  });
  // res.render('user/index', {
  //   user: req.user.dataValues
  // });
});

module.exports = router;
