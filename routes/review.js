import express from 'express';
import { check } from 'express-validator';
import multer from 'multer';
import options from '../config/multer';
import { Review } from '../db/models';
import ReviewController from '../controllers/review.controller';

const upload = multer(options);

const router = express.Router();

const reviewPrebuild = body => {
    body.bookId = JSON.parse(body.bookId).value;
};

const reviewController = new ReviewController(Review, [], reviewPrebuild);

/**
 * @typedef Review
 * @param {viewType} viewType.required
 * @param {title} title.required
 * @param {cover} cover.required
 * @param {description} description.required
 */
/**
 * @route POST /api/v1/review
 * @group review
 * @param {viewType} viewType.required
 * @param {title} title.required
 * @param {cover} cover.required
 * @param {description} description.required
 * @returns {object} 200 - Success
 * @returns {Error}  default - Unexpected error
 */
router.post(
    '/api/v1/review',
    upload.none(), [check(['title', 'description', 'viewType']).notEmpty()],
    reviewController.create,
);

/**
 * @route GET /api/v1/review
 * @group review
 */
router.get(
    '/api/v1/review',
    reviewController.getAll,
);

/**
 * @route GET /api/v1/review/:id
 * @group review
 */
router.get(
    '/api/v1/review/:id',
    reviewController.getOne,
);

/**
 * @route DELETE /api/v1/review/:id
 * @group review
 * @param {integer} id.required - id
 * @returns {object} 200 - Success
 * @returns {Error}  default - Unexpected error
 */
router.delete(
    '/api/v1/review/:id',
    reviewController.delete,
);

export default router;