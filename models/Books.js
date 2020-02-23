const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const bookSchema = new mongoose.Schema({
	coverImage: String,
	bookImage: String,
	shortDescription: String,
	fullDescription: String,
	quote: String,
	ratingCount: Number,
	ratingTotal: Number,
	readLink: String,
	weight: Number,
	title: {type: String, required: true},
	authorId: {type: ObjectId, ref: 'Authors'},
	category: [{type: ObjectId, ref: 'Categories'}],
	films: [{type: ObjectId, ref: 'Films'}],
	comments: [{type: ObjectId, ref: 'Comments'}]
})

module.exports = mongoose.model('Books', bookSchema);