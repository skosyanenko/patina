import express from 'express';
import { check } from 'express-validator';
import multer from 'multer';
import options from '../config/multer';
import { Event } from '../db/models';
import Controller from '../controllers/controller';

const upload = multer(options);

const router = express.Router();

const eventPrebuild = body => {
    const { timeStart, timeEnd, date } = body;
    body.timeStart = new Date(date + ' ' + timeStart);
    body.timeEnd = new Date(date + ' ' + timeEnd);
};

const EventController = new Controller(Event, eventPrebuild);

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
    upload.none(), [check(['date', 'timeStart', 'timeEnd', 'title', 'place']).notEmpty()],
    EventController.create,
);

/**
 * @route GET /api/v1/events
 * @group events
 */
router.get(
    '/api/v1/events',
    EventController.getAll,
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
    EventController.delete,
);

export default router;