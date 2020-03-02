const multer = require('multer');
const path = require('path');

const multerOptions = {
	storage: multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, 'public/uploads/')
		},
		filename: function (req, file, cb) {
			const fileName = file.fieldname + '-' + Date.now() + path.extname(file.originalname)
			cb(null, fileName);
		}
	}),
	limits: {
		fileSize: 3 * 1024 * 1024
	},
	fileFilter: (req, file, cb) => {
		if (!file.originalname.match(/\.(jpg|jpeg|png|gif|svg)$/)) {
			return cb(new Error('Only images are allowed'))
		}
		cb(null, true)
	}
};

module.exports = multerOptions;
