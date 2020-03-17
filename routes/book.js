import express from 'express';
import { check } from 'express-validator';
import multer from 'multer';
import options from '../config/multer';
import { Book } from '../db/models';
import BookController from '../controllers/book.controller';

const upload = multer(options);

const router = express.Router();

const bookController = new BookController(Book);

/**
 * @typedef Books
 * @param {shortDescription}
 * @param {fullDescription}
 * @param {quote}
 * @param {weight}
 * @param {title}
 * @param {readLink}
 */
/**
 * @route POST /api/v1/books
 * @group books
 * @param {shortDescription} shortDescription.required
 * @param {fullDescription} fullDescription.required
 * @param {quote} quote.required
 * @param {weight} weight.required
 * @param {title} title.required
 * @param {readLink} readLink.required
 * @param {coverImage} coverImage.required
 * @param {bookImage} bookImage.required
 * @returns {object} 200 - Success
 * @returns {Error}  default - Unexpected error
 */
router.post(
    '/api/v1/books',
    upload.fields([
        { name: 'coverImage', maxCount: 1 },
        { name: 'bookImage', maxCount: 1 }
    ]), [check([
        'shortDescription',
        'fullDescription',
        'quote',
        'weight',
        'title',
        'readLink',
    ]).notEmpty()],
    bookController.create,
);

/**
 * @route GET /api/v1/books
 * @group books
 */
router.get(
    '/api/v1/books',
    bookController.getAll,
);


/**
 * @route GET /api/v1/books/:id
 * @group books
 */
router.get(
    '/api/v1/books/:id',
    bookController.getOne,
);

/**
 * @route GET /api/v1/booksMainPage
 * @group books
 */
router.get(
    '/api/v1/booksMainPage',
    bookController.booksMainPage,
);

/**
 * @route GET /api/v1/booksRightMenu
 * @group books
 */
router.get(
    '/api/v1/booksRightMenu',
    bookController.booksRightMenu,
);

export default router;