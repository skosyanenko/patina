import React, {Component} from 'react';
import Article from './Article';
import Image from './Image';
import CommentBlock from '../../components/CommentBlock';
import axios from 'axios';
import {countLetters} from '../../config/config';

class NewPage extends Component {
    state = {
        currentNews: [],
        textLength: null,
        datePublish: null
    };

    fetchCurrentNews = async () => {
        const { id } = this.props.match.params;

        return await axios.get(`/api/v1/news/${id}`)
            .then(res => {
                if (res.data) {
                    this.setState({currentNews: res.data}, () =>
                        countLetters(this.state.currentNews.description, this.state.currentNews.createdAt))
                }
            })
            .catch(err => {
                console.log('Ошибка получения элементов из бд' + err)
            });
    };

    componentDidMount() {
        this.fetchCurrentNews();
    }

    render() {
        const {currentNews, textLength, datePublish} = this.state;

        return (
            <>
                <div className="container container--new">
                    <Image {...currentNews}/>
                    <Article {...currentNews}
                             textLength={textLength}
                             date={datePublish}
                    />
                </div>
                <CommentBlock newsId={currentNews.id}/>
            </>
        )
    }
}

export default NewPage;
