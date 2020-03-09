'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    coverImage: DataTypes.STRING,
    bookImage: DataTypes.STRING,
    shortDescription: DataTypes.TEXT,
    fullDescription: DataTypes.TEXT,
    quote: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    title: DataTypes.STRING,
    readLink: DataTypes.STRING,
    ratingCount: DataTypes.INTEGER,
    ratingTotal: DataTypes.INTEGER
  }, {});
  Book.associate = ({Author, Film, Review, Category, Comment, Chart}) => {
  	Book.belongsToMany(Author, {through: 'booksAuthor'});
  	Book.belongsToMany(Category, {through: 'booksCategory'});
  	Book.belongsToMany(Chart, {through: 'booksCharts'});
	Book.hasMany(Film);
	Book.hasMany(Review);
	// Book.hasMany(Comment);
  };
  return Book;
};
