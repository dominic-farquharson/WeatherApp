'use strict';
module.exports = function(sequelize, DataTypes) {
  var Favorite = sequelize.define('Favorite', {
    userId: DataTypes.BIGINT,
    latitude: DataTypes.STRING(255),
    longitude: DataTypes.STRING(255),
    searchQuery: DataTypes.STRING(255)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Favorite;
};