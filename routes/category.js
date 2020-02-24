const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const CategoryController = require('../controllers/category.controller');

router.post(
	'/api/v1/new-category',
	[
		check('title').notEmpty(),
	],
	CategoryController.addNew,
);

router.get(
	'/api/v1/categories',
	CategoryController.getAll,
);

module.exports = router;
