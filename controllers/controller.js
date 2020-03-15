import { validationResult } from 'express-validator';

class Controller {
	constructor(model, prebuild = () => {}) {
		this.model = model;
		this.prebuild = prebuild;
	}

	create = async (req, res) => {
		this.checkValidation(req ,res);
		this.checkFiles(req ,res);

		try {
			this.prebuild(req);

			console.log(req.body);

			await this.model
				.build({...req.body})
				.save()
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

	getAll = async (req, res) => {
		try {
			await this.model.findAll()
				.then(items => res.status(200).json(items))
				.catch(err => console.log('Не удалось получить элементы \n', err));
		} catch (e) {
			throw Error(e);
		}
	};

	getOne = async (req, res) => {
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

	delete = async (req, res) => {
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
		if (!req.file || Object.keys(req.file).length === 0) {
			const msg = 'No files were uploaded.';
			console.log(msg);
			// return res.status(400).send(msg);
		} else {
			const { fieldname, path } = req.file;
			req.body[fieldname] = path;
		}
	};
}

export default Controller;
