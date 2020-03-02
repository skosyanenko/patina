const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const multer = require('multer');
const options = require('../config/multer');
const upload = multer(options);
const AuthorController = require('../controllers/author.controller');

/**
 * @typedef Author
 * @property {string} name.required
 * @property {date} birth.required
 * @property {date} death.required
 * @property {string} picture.required
 */
/**
 * @route POST /api/v1/authors
 * @group Author
 * @param {file} picture.required - картинка
 * @param {string} name.required - Имя
 * @param {date} birth.required - дата рождения
 * @param {date} death.required - дата смерти
 * @returns {object} 200 - Success
 * @returns {Error}  default - Unexpected error
 */
router.post(
	'/api/v1/authors',
	upload.single('picture'),
	[
		check('name').notEmpty(),
		check('birth').notEmpty(),
		check('death').notEmpty(),
	],
	AuthorController.addAuthor,
);

/**
 * @route GET /api/v1/authors
 * @group Author
 * @returns {Array.<Author>} Author - массив авторов
 * @returns {Error}  default - Unexpected error
 */
router.get(
	'/api/v1/authors',
	AuthorController.getAuthors,
);

module.exports = router;
