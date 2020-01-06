const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
	userId: Number,
	bookId: Number,
	published: Date,
	viewType: Number,
	title: String,
	description: String,
	pictures: [String],
	likes: Number,
	comments: [{type: ObjectId, ref: 'Comments'}]
})

module.exports = mongoose.model('Reviews', reviewSchema);