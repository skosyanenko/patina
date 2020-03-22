import React, {Component} from 'react';
import axios from "axios";
import NewsBlock from '../../NewsList/View/NewsBlock';
import NewsElem from '../../NewsList/View/NewsElem';
import NewsLink from '../../NewsList/View/NewsLink';

class News extends Component {
    state = {
        news: []
    };

    componentDidMount() {
        this.fetchNewsMainPage();
    }

    fetchNewsMainPage = () => {
        axios.get('/api/v1/news-main')
            .then(res => {
                res.data &&
                this.setState({
                    news: res.data
                })
            })
            .catch(err => {
                console.log('Ошибка получения элементов из бд' + err)
            });
    };

    viewSwitcher = view => {
        switch (view) {
            case 2:
                return NewsBlock;
            case 3:
                return NewsElem;
            case 4:
                return NewsLink;
            default:
                return '';
        }
    };

    render() {
        const {news} = this.state;

        return (
            <div className="main-news news">
                {news && news.map((item, key) => {
                    const Component = this.viewSwitcher(item.viewType);
                    const objValues = Object.keys(item.description).map(x => item.description[x]);
                    const textLength = Array.from(objValues)
                      .reduce((acc, item) => (acc + item.replace(/\s+/g, '').length), 0);
                    const datePublish = new Date(item.createdAt).toLocaleDateString();
                    return(
                        <Component
                            key={key}
                            {...item}
                            textLength={textLength}
                            date={datePublish}
                        />
                    )
                })}
            </div>
        );
    }
}

export default News;