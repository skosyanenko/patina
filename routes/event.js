const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const multer = require('multer');
const options = require('../config/multer');
const upload = multer(options);

const EventController = require('../controllers/event.controller');

/**
 * @typedef Event
 * @property {date} date.required
 * @property {date} timeStart.required
 * @property {date} timeEnd.required
 * @property {string} title.required
 * @property {string} place.required
 */
/**
 * @route POST /api/v1/events
 * @group events
 * @param {date} date.required - Дата события (дд.мм.гггг)
 * @param {date} timeStart.required - Время начала
 * @param {date} timeEnd.required - Время конца
 * @param {string} title.required - Название
 * @param {string} place.required - Место
 * @returns {object} 200 - Success
 * @returns {Error}  default - Unexpected error
 */
router.post(
	'/api/v1/events',
	upload.none(),
	[check(['date', 'timeStart', 'timeEnd', 'title', 'place']).notEmpty()],
	EventController.addEvent,
);

/**
 * @route GET /api/v1/events
 * @group events
 * @returns {Array.<Event>} Event - массив событий
 * @returns {Error}  default - Unexpected error
 */
router.get(
	'/api/v1/events',
	EventController.getEvents,
);

/**
 * @route DELETE /api/v1/events/:id
 * @group events
 * @param {integer} id.required - id
 * @returns {object} 200 - Success
 * @returns {Error}  default - Unexpected error
 */
router.delete(
	'/api/v1/events/:id',
	EventController.deleteEvent,
);

module.exports = router;
