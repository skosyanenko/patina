import React, {Component, Fragment} from 'react';
import axios from 'axios';
import Pagination from 'components/Pagination';
import TitleOfPage from 'components/TitleOfPage';
import Selection from './Selection';
import Picture from './Picture';

class TopsPage extends Component {
    state = {
        tops: []
    };

    fetchAllTops = async () => {
        return await axios.get('/api/v1/tops')
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
        this.fetchAllTops().then(res => {
            this.setState({tops: res})
        });
    }

    render() {
        const {tops} = this.state;
        return(
            <Fragment>
                <TitleOfPage
                    title={"Топы"}
                    subtitle={"подборки книг на различные темы"}
                />
                <div className="container container--top-detail">
                    <Picture/>
                    <div className="container__container-top">
                        <Selection tops={tops}/>
                        {/*<Pagination/>*/}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default TopsPage;
