'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    date: DataTypes.DATE,
    timeStart: DataTypes.DATE,
    timeEnd: DataTypes.DATE,
    title: DataTypes.STRING,
    place: DataTypes.STRING
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};