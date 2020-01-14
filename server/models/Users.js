const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	phone: String,
	city: String,
	password: String,
	sex: String,
	registrationDate: Date,
	avatar: String,
	socials: {
		telegram: String,
		vk: String
	},
	prefers: {
		books: [String],
		genres: [String],
		authors: [String],
	},
	bookMarks: {
		news: [Number],
		tops: [Number],
		books: [Number],
		reviews: [Number]
	},
	followers: [Number],
	follow: [Number]
})

module.exports = mongoose.model('Users', userSchema);