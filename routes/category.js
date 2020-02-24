const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const CategoryController = require('../controllers/category.controller');

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
	[check('title').notEmpty()],
	CategoryController.addCategory,
);

/**
 * @route GET /api/v1/categories
 * @group categories
 * @returns {Array.<Category>} Category - массив категорий
 * @returns {Error}  default - Unexpected error
 */
router.get(
	'/api/v1/categories',
	CategoryController.getCategories,
);

module.exports = router;
