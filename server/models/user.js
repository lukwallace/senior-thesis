/* eslint-disable */
'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    mobile: DataTypes.STRING,
    profession: DataTypes.STRING,
    description: DataTypes.TEXT,
    experience: DataTypes.INTEGER,
    location: DataTypes.STRING,
    profilePicUrl: DataTypes.STRING,
    facebookId: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Job);
        User.hasMany(models.Review, {foreignKey: 'ReviewFrom'});
        User.hasMany(models.Review, {foreignKey: 'ReviewFor'});  
        User.hasMany(models.Message);
      }
    },
    freezeTableName: true
  });

  return User;
};

