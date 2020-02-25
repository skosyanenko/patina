import React, {Component, Fragment} from 'react';
import axios from 'axios';
import TitleOfPage from 'components/TitleOfPage';
import NewsBlock from './View/NewsBlock';
import NewsVertical from './View/NewsVertical';
import NewsHorizontal from './View/NewsHorizontal';
import NewsElem from './View/NewsElem';
import NewsLink from './View/NewsLink';
import Pagination from 'components/Pagination';

class NewsPage extends Component {
    state = {
        news: []
    };

    viewSwitcher = view => {
        switch (view) {
            case 'view_1':
                return NewsVertical;
            case 'view_2':
                return NewsHorizontal;
            case 'view_3':
                return NewsBlock;
            case 'view_4':
                return NewsElem;
            case 'view_5':
                return NewsLink;
        }
    };

    fetchAllNews = async () => {
        return await axios.get('/api/v1/news')
            .then(res => {
                    if (res.data) {
                    return res.data;
                }
            })
            .catch(err => {
                console.log('Ошибка получения элементов из бд' + err)
            });
    };

    componentDidMount() {
        this.fetchAllNews().then(res => {
            this.setState({news: res})
        });
    }
    
    render () {
        const {news} = this.state;

        return(
            <Fragment>
                <TitleOfPage title={"Новости"}
                    subtitle={"новости из мира литературы"}
                    isSorting={false}
                />
                <div className="news">
                    {news && news.map((item, key) => {
                        const Component = this.viewSwitcher(item.view);
                        const objValues = Object.keys(item.description).map(x => item.description[x]);
                        const textLength = Array.from(objValues)
                            .reduce((acc, item) => (acc + item.replace(/\s+/g, '').length), 0);
                        return(
                            <Component
                                key={key}
                                {...item}
                                textLength={textLength}
                            />
                        )
                    })}
                </div>

                {/*<Pagination/>*/}
            </Fragment>
        )
    }
}

export default NewsPage;
