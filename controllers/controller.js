import { validationResult } from 'express-validator';
class Controller {
    constructor(model, include = [], prebuild = () => {}) {
        this.model = model;
        this.prebuild = prebuild;
        this.includeModels = include;
    }

    create = async(req, res) => {
        this.checkValidation(req, res);

        await this.checkFiles(req, res);

        try {
            this.prebuild(req.body);

            await this.model
                .create({...req.body })
                .then(() => {
                    res.status(200).send('Item created successfully');
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
            await this.model.findAll()
                .then(items => res.status(200).json(items))
                .catch(err => console.log('Не удалось получить элементы \n', err));
        } catch (e) {
            throw Error(e);
        }
    };

    getOne = async(req, res) => {
        try {
            await this.model.findOne({
                    where: { id: req.params.id }
                })
                .then(item => res.status(200).json(item))
                .catch(err => console.log('Не удалось получить элемент \n', err));
        } catch (e) {
            throw Error(e);
        }
    };

    delete = async(req, res) => {
        try {
            await this.model.destroy({
                    where: { id: req.params.id }
                })
                .then(() => res.status(200).send('Item deleted successfully'))
                .catch(err => console.log('Не удалось удалить элемент \n', err));
        } catch (e) {
            throw Error(e);
        }
    };

    checkValidation = (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
    };

    checkFiles = (req, res) => {
        const isSingle = req.file && Object.keys(req.file).length > 0;
        const isMulti = req.files && Object.keys(req.files).length > 0;

        // if (!isSingle && !isMulti) {
        //     return res.status(400).send('No files were uploaded.');
        // }

        if (isSingle) {
            const { fieldname, path } = req.file;
            req.body[fieldname] = path.replace('public', '');
        }

        if (isMulti) {
            Object.keys(req.files).forEach(fieldname => {
                req.body[fieldname] = req.files[fieldname][0].path.replace('public', '');
            });
        }
    };
}

export default Controller;