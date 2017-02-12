'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING(255),
    password: DataTypes.TEXT,
    firstName: DataTypes.STRING(255),
    lastName: DataTypes.STRING(255),
    email: DataTypes.STRING(128)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};