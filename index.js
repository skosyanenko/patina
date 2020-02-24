const express = require('express');
const app = express();
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const expressSwagger = require('express-swagger-generator')(app);
const options = require('./config/swagger');
const db = require('./db/models/index');
const bodyParser = require('body-parser');
const routes = require('./routes');
const PORT = process.env.PORT || 5000;

db.sequelize.authenticate()
	.then(() => console.log('Db connected...'))
	.catch(err => console.log('Error: ' + err));

expressSwagger(options);

app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup());

app.get('/ping', (req, res) => {
	return res.send('pong');
});

routes.forEach(route => app.use(route));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(PORT, console.log(`Server started on port ${PORT}`));
