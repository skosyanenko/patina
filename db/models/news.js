'use strict';
module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define('News', {
    title: DataTypes.STRING,
    cover: DataTypes.STRING,
    description: DataTypes.TEXT,
    likes: DataTypes.INTEGER,
    views: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {});
  News.associate = function(models) {
  	News.hasMany(models.Comment, {as: 'comments'});
  };
  return News;
};
