const { Author } = require('../db/models');
const { validationResult } = require('express-validator');


exports.addAuthor = async (req, res) => {

	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}

	if (!req.file || Object.keys(req.file).length === 0) {
		return res.status(400).send('No files were uploaded.');
	}

	try {
		const { fieldname, path } = req.file;

		req.body[fieldname] = path;

		await Author
			.build({...req.body})
			.save()
			.then(() => {
				res.status(200).send('Success');
			})
			.catch(err => {
				console.log(err);
				return res.status(500).end('Error sending to db');
			});

	} catch (e) {
		throw Error(e);
	}
};

exports.getAuthors = async (req, res) => {
	try {
		await Author.findAll()
			.then(events => res.status(200).json(events))
			.catch(err => console.log('Не удалось получить элементы \n', err));
	} catch (e) {
		throw Error(e);
	}
};
