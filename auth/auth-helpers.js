// importing bcrypt
const bcrypt = require('bcryptjs');
// importing models
const models = require('../db/models/index');

// function to compare password
function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}
