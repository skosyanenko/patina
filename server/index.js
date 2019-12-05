const fastify = require('fastify')({ logger: true });

// Declare a route
fastify.get('/', async (request, reply) => {
	return { hello: 'world' }
})

// Run the server!
const start = async () => {
	try {
		await fastify.listen(4000)
		fastify.log.info(`server listening on ${fastify.server.address().port}`)
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}

start();

// Require external modules
const mongoose = require('mongoose')

// Connect to DB
mongoose.connect('mongodb+srv://styrgia:13307878@patina-0tcqu.mongodb.net/test?retryWrites=true&w=majority')
	.then(() => console.log('MongoDB connected…'))
	.catch(err => console.log(err));