import express from 'express';
import { check } from 'express-validator';
import multer from 'multer';
import options from '../config/multer';
import { Charts } from '../db/models';
import ChartController from '../controllers/chart.controller';

const upload = multer(options);

const router = express.Router();

const ChartsController = new ChartController(Charts);

/**
 * @typedef Charts
 * @param {title} title.required
 * @param {description} description.required
 * @param {image} image.required
 */
/**
 * @route POST /api/v1/charts
 * @group charts
 * @returns {object} 200 - Success
 * @returns {Error}  default - Unexpected error
 */
router.post(
    '/api/v1/charts',
    upload.single('image'), [check(['title', 'description']).notEmpty()],
    ChartsController.create,
);

/**
 * @route GET /api/v1/charts
 * @group charts
 */
router.get(
    '/api/v1/charts',
    ChartsController.getAll,
);

/**
 * @route GET /api/v1/charts/:id
 * @group charts
 */
router.get(
    '/api/v1/charts/:id',
    ChartsController.getOne,
);

/**
 * @route DELETE /api/v1/charts/:id
 * @group charts
 * @param {integer} id.required - id
 * @returns {object} 200 - Success
 * @returns {Error}  default - Unexpected error
 */
router.delete(
    '/api/v1/charts/:id',
    ChartsController.delete,
);

/**
 * @route GET /api/v1/chartsMainPage
 * @group charts
 */
router.get(
  '/api/v1/chartsMainPage',
  ChartsController.chartsMainPage,
);

export default router;