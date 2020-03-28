import { Sequelize, sequelize } from '../db/models';

import Controller from './controller';
import { Book, Category, Author, Film } from '../db/models';

class BooksController extends Controller {

    create = async(req, res) => {
        this.checkValidation(req, res);

        await this.checkFiles(req, res);

        const { AuthorId, CategoryId } = req.body;

        const authors = JSON.parse(AuthorId).map(item => item.value);
        const categories = JSON.parse(CategoryId).map(item => item.value);

        try {
            await Book
                .create({...req.body })
                .then(newBook => {
                    newBook.setAuthors(authors);
                    newBook.setCategories(categories);
                    res.status(200).send('Book created successfully');
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
            await Book.findAll({
                    include: [{
                        model: Author,
                        as: 'authors',
                        attributes: ['name'],
                        through: { attributes: [] }
                    }]
                })
                .then(items => res.status(200).json(items))
                .catch(err => console.log('Не удалось получить элементы \n', err));
        } catch (e) {
            throw Error(e);
        }
    };

    getOne = async(req, res) => {
        try {
            await Book.findOne({
                    where: { id: req.params.id },
                    include: [{
                            model: Category,
                            as: 'categories',
                            attributes: ['id', 'title'],
                            through: {
                                attributes: []
                            }
                        },
                        {
                            model: Author,
                            as: 'authors',
                            attributes: ['id', 'name', 'picture', 'birth', 'death'],
                            through: {
                                attributes: []
                            }
                        },
                        {
                            model: Film,
                            as: 'films',
                            attributes: ['id', 'title', 'image', 'description']
                        }
                    ]
                })
                .then(result => res.status(200).json(result))
                .catch(err => console.log('Не удалось получить элемент \n', err));
        } catch (err) {
            throw Error(err);
        }
    }

    booksMainPage = async(req, res) => {
        return await Book.findAll({
                limit: 10,
                include: [{
                    model: Category,
                    as: 'categories',
                    attributes: ['id', 'title'],
                    through: {
                        attributes: []
                    }
                }]
            })
            .then(result => res.status(200).json(result))
            .catch(err => console.log('Не удалось получить элементы \n', err));
    }

    booksRightMenu = async(req, res) => {
        return await Book.findAll({
                order: Sequelize.fn('RANDOM'),
                limit: 10,
                attributes: ['id', 'title']
            })
            .then(result => res.status(200).json(result))
            .catch(err => console.log('Не удалось получить элементы \n', err));
    }

    searchByTitle = async(req, res) => {
        return await sequelize.query(`
                    SELECT "id", "title" FROM "Books" WHERE _search @@ plainto_tsquery('russian', :query);
                `, {
                model: Book,
                replacements: { query: req.query.q }
            })
            .then(result => res.status(200).json(result))
            .catch(err => console.log('Не удалось получить элементы \n', err));
    }

    searchByCategory = async(req, res) => {
        return await Category.findOne({
                where: { id: req.params.id }
            })
            .then(category => {
                category.getBooks({
                        attributes: ['id', 'title', 'coverImage', 'weight', 'ratingTotal'],
                        include: [{
                            model: Author,
                            as: 'authors',
                            attributes: ['id', 'name'],
                            through: {
                                attributes: []
                            }
                        }]
                    })
                    .then(result => res.status(200).json(result))

            })
            .catch(err => console.log('Не удалось получить элементы \n', err));
    }
}

export default BooksController;