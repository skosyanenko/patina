import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ViewHorizontal from './Views/ViewHorizontal';
import ViewVertical from './Views/ViewVertical';
import './index.sass';

class ReviewsDetail extends Component {
    state = {
        dataItem: [],
        textLength: null,
        datePublish: null,
        error: ''
    };

    componentDidMount() {
        const { id } = this.props.match.params;

        return axios.get(`/api/v1/review/${id}`)
            .then(res => {
                if (res.data) {
                    this.setState({dataItem: res.data}, () =>
                    this.countLetters())
                }
            })
            .catch(err => {
                console.log('Ошибка получения элементов из бд: ' + err);
                this.setState({
                    error: 'Такой рецензии не существует'
                })
            });
    };

    countLetters = () => {
        const { dataItem: {description, createdAt} } = this.state;
        const datePublish = new Date(createdAt).toLocaleDateString();
        const objValues = description.map(x => x.data.text).join();
        const textLength = Array.from(objValues)
            .reduce((acc, item) => (acc + item.replace(/\s+/g, '').length), 0);

        this.setState({textLength,  datePublish});
    };

    render () {
        const { dataItem, textLength, datePublish, error } = this.state;

        if (error.length > 0) return error;

        return(
            <>
                <Link to="/reviews" className="backwards"/>
                { dataItem.viewType === 0
                    ?
                    <ViewHorizontal {...dataItem}
                                    date={datePublish}
                                    textLength={textLength}
                    />
                    :
                    <ViewVertical {...dataItem}
                                  date={datePublish}
                                  textLength={textLength}
                    />
                }
            </>
        )
    }
}

export default ReviewsDetail;
