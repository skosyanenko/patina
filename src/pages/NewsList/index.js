import React, {Component} from 'react';
import TitleOfPage from 'components/TitleOfPage';
import paginationWrap from '../../components/withPagination/paginationWrap';
import NewsList from './NewsList';

const NewsWithPagination = paginationWrap(NewsList);

class NewsPage extends Component {

    render () {

        return(
            <>
                <TitleOfPage title={"Новости"}
                    subtitle={"новости из мира литературы"}
                />
                <NewsWithPagination/>

                {this.props.pagination || ''}
            </>
        )
    }
}

export default NewsPage;
