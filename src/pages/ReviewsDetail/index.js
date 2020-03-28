import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ArrowBackwards from 'components/ArrowBackwards';
import ViewHorizontal from './Views/ViewHorizontal';
import ViewVertical from './Views/ViewVertical';
import axios from 'axios';

class ReviewPage extends Component {
    state = {
        currentReview: [],
        textLength: null,
        datePublish: null
    };

    componentDidMount() {
        this.fetchCurrentReview();
    }

    fetchCurrentReview = async () => {
        const { id } = this.props.match.params;

        return await axios.get(`/api/v1/review/${id}`)
            .then(res => {
                if (res.data) {
                    this.setState({currentReview: res.data})}
            })
            .catch(err => {
                console.log('Ошибка получения элементов из бд' + err)
            });
    };

    // countLetters = (description, date) => {
    //     const objValues = Object.keys(description).map(x => x.data.text[x]);
    //     console.log(objValues)
    //     const textLength = Array.from(objValues)
    //       .reduce((acc, item) => (acc + item.replace(/\s+/g, '').length), 0);
    //     const datePublish = new Date(date).toLocaleDateString();
    //     this.setState(({
    //         textLength,
    //         datePublish
    //     }))
    // };

    render () {
        const {currentReview, textLength, datePublish} = this.state;

        return(
            <>
                <Link to="/reviews">
                    <ArrowBackwards/>
                </Link>
                {currentReview.viewType === 0
                    ?
                    <ViewHorizontal {...currentReview} date={datePublish} textLength={textLength}/>
                    :
                    <ViewVertical {...currentReview} date={datePublish} textLength={textLength}/>
                }
            </>
        )
    }
}

export default ReviewPage;
