'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    title: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
  };
  return Category;
};
