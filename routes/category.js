const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const CategoryController = require('../controllers/category.controller');

router.post(
	'/api/v1/categories',
	[
		check('title').notEmpty(),
	],
	CategoryController.addCategory,
);

router.get(
	'/api/v1/categories',
	CategoryController.getCategories,
);

module.exports = router;
