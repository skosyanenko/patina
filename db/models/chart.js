'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chart = sequelize.define('Chart', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {});
  Chart.associate = function({Book}) {
  	// Chart.hasMany(models.Comment);
  };
  return Chart;
};
