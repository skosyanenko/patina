const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
	userId: {type: ObjectId, ref: 'Users'},
	text: String,
	date: Date
})

module.exports = mongoose.model('Comments', commentSchema);