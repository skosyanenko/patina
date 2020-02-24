const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types;

const chartSchema = new mongoose.Schema({
	title: String,
	description: String,
	image: String,
	books: [{type: ObjectId, ref: 'Books'}],
	comments: [{type: ObjectId, ref: 'Comments'}]
})

module.exports = mongoose.model('Charts', chartSchema);