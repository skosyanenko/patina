import React, { Component } from 'react';
import { counterLetters } from 'config/config';
import NewsBlock from 'components/ComponentsNews/NewsBlock';
import NewsElem from 'components/ComponentsNews/NewsElem';
import NewsLink from 'components/ComponentsNews/NewsLink';

class News extends Component {
    state = {
        articles: []
    }

    componentDidMount() {
        this.setState({
            articles: this.getItems()
        })
    };

    getItems = () => {
        const { articles_2, articles_3, articles_4 } = this.props;
        const articles = [articles_2, articles_3, articles_4];
        return articles.flatMap(item =>
            item.map(elem => {
                return elem;
            })
        )
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
        const { articles } = this.state;

        return (
            <div className="main-news news">
                { articles && articles.map((item, key) => {
                    const Component = this.viewSwitcher(item.viewType);
                    const datePublish = new Date(item.created_at).toLocaleDateString();
                    return(
                        <Component
                            key={key}
                            item={item}
                            textLength={counterLetters(item.description)}
                            date={datePublish}
                        />
                    )
                })}
            </div>
        );
    }
}

export default News;