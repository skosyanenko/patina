const db = require('../config/db');
const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class Book extends Model {}

Book.init({
	coverImage: Sequelize.STRING,
	bookImage: Sequelize.STRING,
	shortDescription: Sequelize.STRING,
	fullDescription: Sequelize.STRING,
	quote: Sequelize.STRING,
	ratingCount: Sequelize.INTEGER,
	ratingTotal: Sequelize.INTEGER,
	readLink: Sequelize.STRING,
	weight: Sequelize.INTEGER,
	title: Sequelize.STRING,
}, {
	sequelize,
	modelName: 'Book'
});

// Book.hasOne(Author);
// Book.hasMany(Category);
// Book.hasMany(Film);
// Book.hasMany(Comment);

Book.sync({ force: true }).then(() => {
	console.log(111);
	return Book.create({
		title: 'John',
		quote: 'Hancock'
	});
});

module.exports = Book;
