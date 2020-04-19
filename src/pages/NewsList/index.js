import React, { Component } from 'react';
import { counterLetters } from 'config/config';
import Loader from 'components/Loader';
import TitleOfPage from 'components/TitleOfPage';
import paginationWrap from 'components/withPagination/paginationWrap';
import NewsVertical from './View/NewsVertical';
import NewsHorizontal from './View/NewsHorizontal';
import NewsBlock from './View/NewsBlock';
import NewsElem from './View/NewsElem';
import NewsLink from './View/NewsLink';
import Store from 'services/Store';
import './index.sass';

class NewsList extends Component {
    state = {
        loading: false
    };

    componentDidMount() {
        const { updateState } = this.props;
        updateState({ perPage: 8, valuesDropdown: [8, 16, 24] });

        this.getItems();
    };

    getItems = () => {
        const { news } = Store;
        const { fetchData, setData } = this.props;
        if (!news.data.length) {
            return fetchData('/api/v1/news')
                .then(data => {
                    this.setState({loading: false});
                    Store.setData('news', {data});
                })
                .catch(err => console.log(err));
        }
        setData(news);
    };

    viewSwitcher = view => {
        switch (view) {
            case 0:
                return NewsVertical;
            case 1:
                return NewsHorizontal;
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
        const { loading } = this.state;
        const { items } = this.props;

        return(
            <>
                <TitleOfPage title={"Новости"}
                    subtitle={"новости из мира литературы"}
                />
                {!loading
                    ?
                    <>
                        <div className="news" >
                            { items && items.map((item, key) => {
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
                        {this.props.pagination || ''}
                    </>
                    :
                    <Loader/>
                }
            </>
        )
    }
}

export default paginationWrap(NewsList);
