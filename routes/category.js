import express from 'express';
import { check } from 'express-validator';
import multer from 'multer';
import options from '../config/multer';
import { Category } from '../db/models';
import Controller from '../controllers/controller';

const upload = multer(options);

const router = express.Router();

const CategoryController = new Controller(Category);

/**
 * @typedef Category
 * @property {integer} id.required
 * @property {string} title.required
 */
/**
 * @route POST /api/v1/categories
 * @group categories
 * @param {string} title.required - название категории
 * @returns {object} 200 - Success
 * @returns {Error}  default - Unexpected error
 */
router.post(
    '/api/v1/categories',
    upload.none(), [check('title').notEmpty()],
    CategoryController.create,
);

/**
 * @route GET /api/v1/categories
 * @group categories
 */
router.get(
    '/api/v1/categories',
    CategoryController.getAll,
);

/**
 * @route GET /api/v1/categories/:id
 * @group categories
 */
router.get(
    '/api/v1/categories/:id',
    CategoryController.getOne,
);

/**
 * @route DELETE /api/v1/categories/:id
 * @group categories
 * @param {integer} id.required - id
 * @returns {object} 200 - Success
 * @returns {Error}  default - Unexpected error
 */
router.delete(
    '/api/v1/categories/:id',
    CategoryController.delete,
);

export default router;