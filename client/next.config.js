const path = require('path');
require('dotenv').config();

module.exports = {
    env: {
        API_URL: process.env.API_URL
    },

    webpack: config => {
        config.resolve.modules = [
            'node_modules',
            path.join(__dirname, 'src')
        ]
        return config
    }
};