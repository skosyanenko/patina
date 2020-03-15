'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    name: DataTypes.STRING,
    picture: DataTypes.STRING,
    birth: DataTypes.DATEONLY,
    death: DataTypes.DATEONLY,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    }
  }, {});
  Author.associate = function(models) {

  };
  return Author;
};
