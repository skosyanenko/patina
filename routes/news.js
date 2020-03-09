const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const multer = require('multer');
const options = require('../config/multer');
const upload = multer(options);

const FilmController = require('../controllers/film.controller');

/**
 * @typedef Film
 * @param {title} title.required
 * @param {description} description.required
 * @param {image} image.required
 */
/**
 * @route POST /api/v1/films
 * @group films
 * @param {title} title.required
 * @param {description} description.required
 * @param {image} image.required
 * @returns {object} 200 - Success
 * @returns {Error}  default - Unexpected error
 */
router.post(
	'/api/v1/films',
	upload.single('image'),
	[check(['title', 'description']).notEmpty()],
	FilmController.addFilm,
);

/**
 * @route GET /api/v1/films
 * @group films
 * @returns {Array.<Film>} Film - массив фильмов
 * @returns {Error}  default - Unexpected error
 */
router.get(
	'/api/v1/films',
	FilmController.getFilms,
);

module.exports = router;
