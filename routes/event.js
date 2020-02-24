const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const EventController = require('../controllers/event.controller');

router.post(
	'/api/v1/events',
	[
		check(['date', 'timeStart', 'timeEnd', 'title', 'place']).notEmpty(),
	],
	EventController.addEvent,
);

router.get(
	'/api/v1/events',
	EventController.getEvents,
);

module.exports = router;
