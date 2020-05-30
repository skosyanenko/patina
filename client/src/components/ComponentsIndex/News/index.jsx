import React, { Component } from 'react';
import { counterLetters } from 'config/config';
import NewsBlock from 'components/ComponentsNews/NewsBlock';
import NewsElem from 'components/ComponentsNews/NewsElem';
import NewsLink from 'components/ComponentsNews/NewsLink';

class News extends Component {
    state = {
        articles: []
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
        const { toggleModal, articles_2, articles_3, articles_4 } = this.props;

        const articles = [articles_2, articles_3, articles_4];

        return (
            <div className="main-news news">
                { articles && articles.length && articles.flat().map((item, key) => {
                    const Component = this.viewSwitcher(item.viewType);
                    const datePublish = new Date(item.created_at).toLocaleDateString();
                    return(
                        <Component
                            key={key}
                            item={item}
                            textLength={counterLetters(item.description)}
                            date={datePublish}
                            toggleModal={toggleModal}
                        />
                    )
                })}
            </div>
        );
    }
}

export default News;