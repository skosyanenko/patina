import {Chart, Sequelize} from '../db/models';
import Controller from './controller';
import { Book, Review, Author } from '../db/models';

class ReviewController extends Controller {
    getOne = async(req, res) => {
        try {
            await Review.findOne({
                    where: { id: req.params.id }
                })
                .then(async result => {
                    await Book.findOne({
                            where: { id: result.bookId },
                            attributes: ['title', 'quote'],
                            include: {
                                model: Author,
                                as: 'authors'
                            },
                            through: { attributes: [] }
                        }).then(book => {
                            console.log('book :', book.dataValues);
                            result.dataValues.book = book.dataValues;
                            result.description = JSON.parse(result.description);
                            res.status(200).json(result);
                        })
                        .catch(err => console.log(err));
                })
                .catch(err => console.log('Не удалось получить элемент \n', err));
        } catch (err) {
            throw Error(err);
        }
    }
}

export default ReviewController;