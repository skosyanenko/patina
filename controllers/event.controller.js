const { Event } = require('../db/models');
const { validationResult } = require('express-validator');

exports.addEvent = async (req, res) => {

	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}

	try {
		const {timeStart, timeEnd, date} = req.body;

		req.body.timeStart = new Date(date + ' ' + timeStart);
		req.body.timeEnd = new Date(date + ' ' + timeEnd);

		await Event
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

exports.getEvents = async (req, res) => {
	try {
		await Event.findAll()
			.then(events => res.status(200).json(events))
			.catch(err => console.log('Не удалось получить элементы \n', err));
	} catch (e) {
		throw Error(e);
	}
};

exports.deleteEvent = async (req, res) => {
	try {
		await Event.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(() => res.status(200).send('Success'))
		.catch(err => console.log('Не удалось удалить элемент \n', err));
	} catch (e) {
		throw Error(e);
	}
};
