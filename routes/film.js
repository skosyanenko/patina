import express from 'express';
import { check } from 'express-validator';
import multer from 'multer';
import options from '../config/multer';
import { Film } from '../db/models';
import Controller from '../controllers/controller';

const upload = multer(options);

const router = express.Router();

const FilmController = new Controller(Film);

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
    upload.single('image'), [check(['title', 'description']).notEmpty()],
    FilmController.create,
);

/**
 * @route GET /api/v1/films
 * @group films
 */
router.get(
    '/api/v1/films',
    FilmController.getAll,
);

export default router;