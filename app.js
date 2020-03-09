import express from 'express';
import path from 'path';
import swaggerOptions from './config/swagger';
import db from './db/models/index';
import bodyParser from 'body-parser';
import { importRoutes } from './config/helpers';

const app = express();
const expressSwagger = require('express-swagger-generator')(app);

const PORT = process.env.PORT || 5000;

db.sequelize.authenticate()
	.then(() => console.log('Db connected...'))
	.catch(err => console.log('Error: ' + err));

expressSwagger(swaggerOptions);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

importRoutes(__dirname)
	.then(routes => routes.forEach(route => app.use(route.default)))
	.catch(err => console.log(err));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'build')));
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'build', 'index.html'));
	});
}

app.listen(PORT, console.log(`Server started on port ${PORT}`));
