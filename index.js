const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./config/swagger');
const Sequelize = require('sequelize');
const {NODE_ENV: env} = process.env;
const config = require('./config/database')[env];


const sequelize = new Sequelize(config);
// const routes = require('./routes/index');


sequelize.authenticate()
	.then(() => console.log('Db connected...'))
	.catch(err => console.log('Error: ' + err));

app.use(express.static(path.join(__dirname, 'build')));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/ping', function (req, res) {
	return res.send('pong');
});

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8089);
