import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icons from 'components/Icons';
import Socials from 'components/SocialsGroup';
import TimeToRead from 'components/TimeToRead';
import CommentBlock from 'components/CommentBlock';
import axios from 'axios';
import './index.sass';

class NewsDetail extends Component {
    state = {
        currentNews: [],
        textLength: null,
        datePublish: null
    };

    componentDidMount() {
        this.fetchCurrentNews();
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

    countLetters = ( description, date ) => {
        const objValues = Object.keys(description).map(x => description[x]);
        const textLength = Array.from(objValues)
          .reduce((acc, item) => (acc + item.replace(/\s+/g, '').length), 0);
        const datePublish = new Date(date).toLocaleDateString();
        this.setState(({
            textLength,
            datePublish
        }))
    };

    render() {
        const { textLength, datePublish } = this.state;
        const { currentNews: {title, description, cover, viewType, likes, views, id} } = this.state;
        const view = viewType === 1 || viewType === 2 || viewType === 3;

        return (
            <>
                <div className="container container--new" itemType="http://schema.org/NewsArticle http://schema.org/CreativeWork" itemScope>
                    <div className="image">
                        <Link to="/news" className="backwards backwards--news"/>
                        { view ? <h1 className="article__title-horizontal" itemProp="headline name">{title}</h1> : ''}
                        <div className="image__wrapper">
                            <div className={`${view ? 'image__wrapper-horizontal' : 'image__wrapper-img'}`}>
                                <img src={cover} alt="" itemProp="image"/>
                            </div>
                            <div className="image__wrapper-figure"/>
                            <div className="image__wrapper-figure"/>
                        </div>
                    </div>
                    <div className={`article ${view ? 'article__horizontal' : ''}`}>
                        { viewType === 0 || viewType === 4 ? <h1 className="article__title" itemProp="headline name">{title}</h1> : ''}
                        <div className="article__wrapper">
                            <div className={`${view ? 'article__wrapper-horizontal' : 'article__wrapper-text'}`}
                                 dangerouslySetInnerHTML={{__html: `${description}`}}
                                 itemProp="description"
                            />
                            <div className="article__wrapper-nav">
                                <div className="article__wrapper-wrap">
                                    <TimeToRead textLength={textLength}/>
                                    <Icons likes={likes}
                                           date={datePublish}
                                           views={views}
                                    />
                                </div>
                                <Socials/>
                            </div>
                        </div>
                    </div>
                </div>
                <CommentBlock newsId={id}/>
            </>
        )
    }
}

export default NewsDetail;
