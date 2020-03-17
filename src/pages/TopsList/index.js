import React, {Component} from 'react';
import paginationWrap from 'components/withPagination/paginationWrap';
import TitleOfPage from 'components/TitleOfPage';
import Selection from './Selection';
import Picture from './Picture';

const TopsWithPagination = paginationWrap(Selection);

class TopsPage extends Component {

    render() {
        return(
            <>
                <TitleOfPage
                    title={"Топы"}
                    subtitle={"подборки книг на различные темы"}
                />
                <div className="container container--top-detail">
                    <Picture/>
                    <div className="container__container-top">
                        <TopsWithPagination/>
                    </div>
                </div>
            </>
        );
    }
}

export default TopsPage;
