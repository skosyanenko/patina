import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ArrowBackwards from 'components/ArrowBackwards';
import View_1 from './Views/View_1';
import View_2 from './Views/View_2';
import axios from 'axios';

class ReviewPage extends Component {
    state = {
        currentReview: {}
    };

    viewSwitcher = view => {
        switch (view) {
            case 0:
                return View_1;
            case 1:
                return View_2;
            default:
                return '';
        }
    };

    fetchCurrentReview = async () => {
        const { id } = this.props.match.params;

        return await axios.get(`/api/v1/reviews/${id}`)
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
        this.fetchCurrentReview().then(res => {
            this.setState({currentReview: res})
        });
    }

    render () {
        const {currentReview} = this.state;

        return(
            <>
                <Link to="/reviews">
                    <ArrowBackwards/>
                </Link>
                {currentReview && currentReview.map((item, key) => {
                    const Component = this.viewSwitcher(item.viewType);
                    const objValues = Object.keys(item.description).map(x => item.description[x]);
                    const textLength = Array.from(objValues)
                        .reduce((acc, item) => (acc + item.replace(/\s+/g, '').length), 0);
                    return(
                        <Component
                            key={key}
                            review={currentReview}
                            textLength={textLength}
                        />
                    )
                })}
            </>
        )
    }
}

export default ReviewPage;
