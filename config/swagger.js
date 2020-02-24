const options = {
	swaggerDefinition: {
		info: {
			description: 'This is a sample server',
			title: 'Swagger',
			version: '1.0.0',
		},
		host: 'localhost:5000',
		basePath: '/api/v1',
		produces: [
			"application/json",
			"application/xml"
		],
		schemes: ['http', 'https'],
		// securityDefinitions: {
		// 	JWT: {
		// 		type: 'apiKey',
		// 		in: 'header',
		// 		name: 'Authorization',
		// 		description: "",
		// 	}
		// }
	},
	basedir: __dirname,
	files: ['../routes/*.js']
};

module.exports = options;
