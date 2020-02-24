const express = require('express');
const app = express();
const path = require('path');
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



app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', (req, res) => {
	return res.send('pong');
});

routes.forEach(route => app.use(route));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'build')));
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'build', 'index.html'));
	});
}


app.listen(PORT, console.log(`Server started on port ${PORT}`));
