const { Event } = require('../db/models');
const { validationResult } = require('express-validator');

exports.addEvent = async (req, res) => {

	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}

	try {
		Event
			.build({...req.body})
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

exports.getEvents = async (req, res) => {
	try {
		Event.findAll()
			.then(events => res.status(200).json(events))
			.catch(err => console.log('Не удалось получить элементы \n', err));
	} catch (e) {
		throw Error(e);
	}
};
