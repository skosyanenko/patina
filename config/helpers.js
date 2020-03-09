import fs from 'fs';
import { basename, resolve } from 'path';

export async function asyncForEach(array, cb) {
	for (const item of array) await cb(item);
}

export const importRoutes = async (path) => {
	let routes = [];

	const dir = resolve(path, 'routes');

	const baseName = basename(__filename);

	const files = fs.readdirSync(dir).filter(file => (
		file !== baseName &&
		file.indexOf('.') !== 0 &&
		file.slice(-3) === '.js'
	));

	await asyncForEach(files, file => {
		import(`${dir}/${file}`)
			.then(module => routes.push(module))
			.catch(err => console.log(err));
	});

	return routes;
};
