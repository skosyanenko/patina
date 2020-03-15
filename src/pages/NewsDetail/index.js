import React, {Component} from 'react';
import Article from './Article';
import Image from './Image';
import CommentBlock from '../../components/CommentBlock';
import axios from 'axios';

class NewPage extends Component {
    state = {
        currentNews: []
    };

    fetchCurrentNews = async () => {
        const { id } = this.props.match.params;

        return await axios.get(`/api/v1/news/${id}`)
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
        this.fetchCurrentNews().then(res => {
            this.setState({currentNews: res})
        });
    }

    render() {
        const {currentNews} = this.state;

        return (
            <>
                <div className="container container--new">
                    <Image image={currentNews.cover}/>
                    <Article news={currentNews}/>
                </div>
                <CommentBlock newsId={currentNews.id}/>
            </>
        )
    }
}

export default NewPage;
