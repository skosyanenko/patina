import React, { Component } from 'react';
import axios from 'axios';
import { counterLetters } from 'config/config';
import Loader from 'components/Loader';
import TitleOfPage from 'components/TitleOfPage';
import paginationWrap from 'components/withPagination/paginationWrap';
import NewsVertical from 'components/ComponentsNews/NewsVertical';
import NewsHorizontal from 'components/ComponentsNews/NewsHorizontal';
import NewsBlock from 'components/ComponentsNews/NewsBlock';
import NewsElem from 'components/ComponentsNews/NewsElem';
import NewsLink from 'components/ComponentsNews/NewsLink';
import MyHead from 'components/MyHead';

class NewsList extends Component {
    componentDidMount() {
        const { setData, articles } = this.props;
        setData({data: articles});
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
        const { items, loading, toggleModal } = this.props;

        return(
            <>
                <MyHead
                    title={'Новости - Patina'}
                    description={'Новости и статьи из мира литературы'}
                    link={'/articles'}
                    robots={'all'}
                />
                <>
                    <TitleOfPage
                        title={"Новости"}
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
                                            item={item}
                                            textLength={counterLetters(item.description)}
                                            date={datePublish}
                                            toggleModal={toggleModal}
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
            </>
        )
    }
}

export async function getStaticProps() {
    const { API_URL } = process.env;

    const resArticles = await axios.get(`${API_URL}/articles`)
    const articles = await resArticles.data;

    return { props: {articles} }
}

export default paginationWrap(NewsList, 8, [8, 16, 24]);
