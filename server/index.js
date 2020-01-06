const fastify = require('fastify')({ logger: true });
const routes = require('./routes/index');
const swagger = require('./config/swagger');
const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://styrgia:13307878@patina-0tcqu.mongodb.net/patina';
const MongoConfig = {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
};

mongoose.connect(MONGO_URI, MongoConfig)
	.then(() => console.log('MongoDB connected…'))
	.catch(err => console.log(`db error ${err.message}`));

fastify.register(require('fastify-swagger'), swagger.options);

fastify.get('/', async (request, reply) => {
	reply.send('hello world');
})

const start = async () => {
	try {
		await fastify.listen(4500);

		fastify.swagger();

		fastify.log.info(`server listening on ${fastify.server.address().port}`)

	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}

routes.forEach((route, index) => {
	fastify.route(route);
});

start();