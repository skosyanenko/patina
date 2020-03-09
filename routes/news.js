import express from 'express';
import { check } from 'express-validator';
import multer from 'multer';
import options from '../config/multer';
import { News } from '../db/models';
import Controller from '../controllers/controller';

const upload = multer(options);

const router = express.Router();

const NewsController = new Controller(News);

/**
 * @typedef News
 * @param {viewType} viewType.required
 * @param {title} title.required
 * @param {cover} cover.required
 * @param {description} description.required
 */
/**
 * @route POST /api/v1/news
 * @group news
 * @param {viewType} viewType.required
 * @param {title} title.required
 * @param {cover} cover.required
 * @param {description} description.required
 * @returns {object} 200 - Success
 * @returns {Error}  default - Unexpected error
 */
router.post(
	'/api/v1/news',
	upload.single('cover'),
	[check(['title', 'description', 'viewType']).notEmpty()],
	NewsController.create,
);

/**
 * @route GET /api/v1/news
 * @group news
 * @returns {Array.<News>} News - массив новостей
 * @returns {Error}  default - Unexpected error
 */
router.get(
	'/api/v1/news',
	NewsController.getAll,
);

export default router;
