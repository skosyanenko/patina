const bookSchema = require('../models/Books');
const booksController = require('../controllers/BookController');

const routes = [
	{
		method: 'GET',
		url: '/api/books',
		handler: booksController.getBooks
	},
	{
		method: 'GET',
		url: '/api/books/:id',
		handler: booksController.getSingleBook
	},
	{
		method: 'POST',
		url: '/api/books',
		handler: booksController.addBook,
		schema: bookSchema
	},
	{
		method: 'PUT',
		url: '/api/books/:id',
		handler: booksController.updateBook
	},
	{
		method: 'DELETE',
		url: '/api/books/:id',
		handler: booksController.deleteBook
	}
]

module.exports = routes;