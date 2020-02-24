'use strict';
module.exports = (sequelize, DataTypes) => {
  const Film = sequelize.define('Film', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Film.associate = function(models) {
  	Film.belongsTo(models.Book);
  };
  return Film;
};
