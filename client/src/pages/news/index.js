import React, { Component } from 'react';
import axios from 'axios';
import sortBy from 'lodash.sortby';
import { counterLetters } from 'config/config';
import Loader from 'components/Loader';
import TitleOfPage from 'components/TitleOfPage';
import paginationWrap from 'components/withPagination/paginationWrap';
import NewsVertical from 'components/ComponentsNews/NewsVertical';
import NewsHorizontal from 'components/ComponentsNews/NewsHorizontal';
import NewsBlock from 'components/ComponentsNews/NewsBlock';
import NewsElem from 'components/ComponentsNews/NewsElem';
import NewsLink from 'components/ComponentsNews/NewsLink';
import Store from 'services/Store';

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
        const { setData, serverData } = this.props;
        if (!Store.articles.data.length) {
            this.setState({loading: false});
            Store.setData('articles', { data: serverData });
        }
        setData({data: sortBy(Store.articles.data, 'id')});
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
                                const datePublish = new Date(item.created_at).toLocaleDateString();
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

export async function getServerSideProps() {
    const { API_URL } = process.env;

    const serverData = await axios.get(`${API_URL}/articles`)
      .then(res => res.data)
      .catch(err => console.log(err));

    return { props: { serverData } };

}

export default paginationWrap(NewsList);
