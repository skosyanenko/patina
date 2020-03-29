import React, {Component} from 'react';
import Article from './Article';
import Image from './Image';
import CommentBlock from '../../components/CommentBlock';
import axios from 'axios';

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
                        this.countLetters(this.state.currentNews.description, this.state.currentNews.createdAt))
                }
            })
            .catch(err => {
                console.log('Ошибка получения элементов из бд' + err)
            });
    };

    countLetters = (description, date) => {
        const objValues = Object.keys(description).map(x => description[x]);
        const textLength = Array.from(objValues)
          .reduce((acc, item) => (acc + item.replace(/\s+/g, '').length), 0);
        const datePublish = new Date(date).toLocaleDateString();
        this.setState(({
            textLength,
            datePublish
        }))
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
