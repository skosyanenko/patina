import { Chart, Sequelize } from '../db/models';
import Controller from './controller';
import { Book, Review, Author, User } from '../db/models';

class ReviewController extends Controller {

    create = async(req, res) => {
        this.checkValidation(req, res);

        await this.checkFiles(req, res);

        const { BookId, UserId } = req.body;

        const book = JSON.parse(BookId).map(item => item.value);
        // const users = JSON.parse(UserId).map(item => item.value);

        try {
            await Review
                .create({...req.body })
                .then(newBook => {
                    newBook.setBooks(book);
                    // newBook.setUsers(users);
                    res.status(200).send('Review created successfully');
                })
                .catch(err => {
                    console.log(err);
                    return res.status(500).end('Error sending to db');
                });

        } catch (e) {
            throw Error(e);
        }
    };

    getAll = async(req, res) => {
        try {
            await Review.findAll({
                include: {
                    model: Book,
                    as: 'book',
                    attributes: ['title', 'bookImage']
                }
            })
              .then(items => res.status(200).json(items))
              .catch(err => console.log('Не удалось получить элементы \n', err));
        } catch (e) {
            throw Error(e);
        }
    };

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