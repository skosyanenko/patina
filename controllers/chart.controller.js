import { Sequelize } from '../db/models';
import Controller from './controller';
import { Book, Chart, Author } from '../db/models';

class ChartController extends Controller {

    create = async(req, res) => {
        this.checkValidation(req, res);

        await this.checkFiles(req, res);

        const { books } = req.body;

        const chartBooks = JSON.parse(books).map(item => item.value);

        try {
            await Chart
                .create({...req.body })
                .then(chart => {
                    chart.setBooks(chartBooks);
                    res.status(200).send('Chart created successfully');
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
            await Chart.findAll()
                .then(items => res.status(200).json(items))
                .catch(err => console.log('Не удалось получить элементы \n', err));
        } catch (e) {
            throw Error(e);
        }
    };

    getOne = async(req, res) => {
        try {
            await Chart.findOne({
                    where: { id: req.params.id },
                    include: [{
                        model: Book,
                        as: 'books',
                        attributes: ['id', 'title', 'shortDescription'],
                        include: {
                            model: Author,
                            as: 'authors',
                            attributes: ['id', 'name'],
                            through: { attributes: [] }
                        },
                        through: { attributes: [] }
                    }]
                })
                .then(result => {
                    if (Array.isArray(result.description)) {
                        result.description = JSON.parse(result.description);
                    }
                    res.status(200).json(result)
                })
                .catch(err => console.log('Не удалось получить элемент \n', err));
        } catch (err) {
            throw Error(err);
        }
    };

    chartsMainPage = async(req, res) => {
        return await Chart.findAll({ limit: 10 })
            .then(result => res.status(200).json(result))
            .catch(err => console.log('Не удалось получить элементы \n', err));
    }
}

export default ChartController;