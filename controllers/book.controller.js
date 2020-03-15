import Controller from './controller';
import { Book, Category } from '../db/models';

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
                    newBook.setBookHasCategories(categories);
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

}

export default BooksController;