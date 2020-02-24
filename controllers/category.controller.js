const { Category } = require('../db/models');
const { validationResult } = require('express-validator');

exports.addCategory = async (req, res) => {

	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}

	try {
		Category
			.build({
				title: req.body.title,
			})
			.save()
			.then(() => {
				res.status(200).send('Success');
			})
			.catch(err => {
				console.log(err);
			});

	} catch (e) {
		throw Error(e);
	}
};

exports.getCategories = async (req, res) => {
	try {
		Category.findAll({
			attributes: ['id', 'title']
		})
			.then(categories => res.status(200).json(categories))
			.catch(err => console.log('Не удалось получить элементы \n', err));
	} catch (e) {
		throw Error(e);
	}
};