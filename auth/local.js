// importing password
const passport = require('passport');
// importing local strategy
const LocalStrategy = require('passport-local').Strategy;

//setting init to a variable
const init = require('./passport');
// importing models
const models = require('../db/models/index');
// importing auth-helpers
const authHelpers = require('../auth/auth-helpers');
// creating empty object
const options = {};
// invoking passport
init();
// defining new strategy
passport.use(new LocalStrategy(options, (username, password, done) => {
  // check to see if the username exists
  models.User.findOne({
    where: {
      username: username
    }
  })
  .then((user) => {
    console.log(user);
    if (!user) {
      return done(null, false);
    }
    if (!authHelpers.comparePass(password, user.dataValues.password)) {
      return done(null, false);
    } else {
      return done(null, user.dataValues);
    }
  })
  .catch((err) => { return done(err); });
}));
// exporting passport
module.exports = passport;
