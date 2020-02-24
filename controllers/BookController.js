const boom = require('@hapi/boom');

exports.getBooks = async (req, reply) => {
	try {
		const books = await Books.find();
		return books;
	} catch (err) {
		throw boom.boomify(err);
	}
}

exports.getSingleBook = async (req, reply) => {
	try {
		const id = req.params.id;
		const book = await Books.findById(id);
		return book;
	} catch (err) {
		throw boom.boomify(err)
	}
}

exports.addBook = async (req, reply) => {
	try {
		const book = new Books({...req.body});
		return await book.save();
	} catch (err) {
		throw boom.boomify(err)
	}
}

exports.updateBook = async (req, reply) => {
	try {
		const id = req.params.id
		const book = req.body
		const { ...updateData } = book
		return await Books.findByIdAndUpdate(id, updateData, { new: true });
	} catch (err) {
		throw boom.boomify(err)
	}
}

exports.deleteBook = async (req, reply) => {
	try {
		const id = req.params.id;
		return await Books.findByIdAndRemove(id);
	} catch (err) {
		throw boom.boomify(err)
	}
}
