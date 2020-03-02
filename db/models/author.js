'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    name: DataTypes.STRING,
    picture: DataTypes.STRING,
    birth: DataTypes.DATEONLY,
    death: DataTypes.DATEONLY
  }, {});
  Author.associate = function(models) {

  };
  return Author;
};
