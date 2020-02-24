const mongoose = require('mongoose')

const filmSchema = new mongoose.Schema({
	title: String,
	image: String,
	description: String
})

module.exports = mongoose.model('Films', filmSchema);