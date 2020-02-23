const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types;

const authorSchema = new mongoose.Schema({
	name: String,
	picture: String,
	years: String,
	books: [{type: ObjectId, ref: 'Books'}]
});

module.exports = mongoose.model('Authors', authorSchema);