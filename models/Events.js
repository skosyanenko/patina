const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
	date: Date,
	timeStart: Date,
	timeEnd: Date,
	title: String,
	place: String
})

module.exports = mongoose.model('Events', eventSchema);