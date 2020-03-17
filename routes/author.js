import express from 'express';
import { check } from 'express-validator';
import multer from 'multer';
import options from '../config/multer';
import { Author } from '../db/models';
import Controller from '../controllers/controller';

const upload = multer(options);

const router = express.Router();

const AuthorController = new Controller(Author);

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
    upload.single('picture'), [check(['name', 'birth']).notEmpty()],
    AuthorController.create,
);

/**
 * @route GET /api/v1/authors
 * @group Author
 */
router.get(
    '/api/v1/authors',
    AuthorController.getAll,
);

export default router;