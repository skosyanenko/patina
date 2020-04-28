import React, { Component } from 'react';
import { counterLetters } from 'config/config';
import NewsBlock from 'components/ComponentsNews/NewsBlock';
import NewsElem from 'components/ComponentsNews/NewsElem';
import NewsLink from 'components/ComponentsNews/NewsLink';

class News extends Component {
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
        const { articles } = this.props;

        return (
            <div className="main-news news">
                { articles && articles.map((item, key) => {
                    const Component = this.viewSwitcher(item.viewType);
                    const datePublish = new Date(item.createdAt).toLocaleDateString();
                    return(
                        <Component
                            key={key}
                            {...item}
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