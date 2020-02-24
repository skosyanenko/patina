'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    coverImage: DataTypes.STRING,
    bookImage: DataTypes.STRING,
    shortDescription: DataTypes.TEXT,
    fullDescription: DataTypes.TEXT,
    quote: DataTypes.STRING,
    ratingCount: DataTypes.INTEGER,
    ratingTotal: DataTypes.INTEGER,
    readLink: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {});
  Book.associate = ({Author, Film, Review, Category, Comment, Chart}) => {
  	Book.belongsTo(Author);
  	Book.belongsToMany(Category, {through: 'booksCategory'});
  	Book.belongsToMany(Chart, {through: 'booksCharts'});
	Book.hasMany(Film);
	Book.hasMany(Review);
	// Book.hasMany(Comment);
  };
  return Book;
};
