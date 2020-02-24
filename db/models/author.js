'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    name: DataTypes.STRING,
    picture: DataTypes.STRING,
    years: DataTypes.STRING
  }, {});
  Author.associate = function(models) {

  };
  return Author;
};
