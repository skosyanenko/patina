const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({
	title: String,
	cover: String,
	description: String,
	likes: Number,
	views: Number,
	date: Date,
	comments: [{type: ObjectId, ref: 'Comments'}]
})

module.exports = mongoose.model('News', newsSchema);