import Controller from "./controller";
import { News } from '../db/models';

class NewsController extends Controller {

    getMainPage = async(req, res) => {
        try {

            Promise.all([
                News.findAll({
                    where: { viewType: 2 },
                    limit: 1
                }),
                News.findAll({
                    where: { viewType: 3 },
                    limit: 2
                }),
                News.findAll({
                    where: { viewType: 4 },
                    limit: 3
                })
            ]).then(result => {
                res.status(200).json(result.flat());
            })

        } catch (e) {
            throw Error(e);
        }

    }
}

export default NewsController;