import express from 'express';
import { check } from 'express-validator';
import multer from 'multer';
import options from '../config/multer';
import { News } from '../db/models';
import NewsController from '../controllers/news.controller';

const upload = multer(options);

const router = express.Router();

const newsController = new NewsController(News);

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
    upload.single('cover'), [check(['title', 'description', 'viewType']).notEmpty()],
    newsController.create,
);

/**
 * @route GET /api/v1/news
 * @group news
 */
router.get(
    '/api/v1/news',
    newsController.getAll,
);

/**
 * @route GET /api/v1/news/:id
 * @group news
 */
router.get(
    '/api/v1/news/:id',
    newsController.getOne,
);

/**
 * @route GET /api/v1/news-main
 * @group news
 */
router.get(
    '/api/v1/news-main',
    newsController.getMainPage,
);

/**
 * @route DELETE /api/v1/news/:id
 * @group news
 * @param {integer} id.required - id
 * @returns {object} 200 - Success
 * @returns {Error}  default - Unexpected error
 */
router.delete(
    '/api/v1/news/:id',
    newsController.delete,
);

export default router;