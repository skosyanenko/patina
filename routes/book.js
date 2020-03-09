const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const multer = require('multer');
const options = require('../config/multer');
const upload = multer(options);

const NewsController = require('../controllers/news.controller');

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
	NewsController.addNews,
);

/**
 * @route GET /api/v1/news
 * @group news
 * @returns {Array.<News>} News - массив новостей
 * @returns {Error}  default - Unexpected error
 */
router.get(
	'/api/v1/news',
	NewsController.getNews,
);

module.exports = router;
