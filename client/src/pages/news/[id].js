import React, { Component } from 'react';
import Link from 'next/link';
import { counterLetters, returnDatePublish} from 'config/config';
import ReactMarkdown from 'react-markdown';
import Icons from 'components/Icons';
import Socials from 'components/SocialsGroup';
import TimeToRead from 'components/TimeToRead';
import CommentBlock from 'components/CommentBlock';
import MyHead from 'components/MyHead';
import axios from 'axios';

class NewsDetail extends Component {

    state = {
        error: '',
        viewsUpdate: 0
    };

    componentDidMount() {
        const { serverData } = this.props;
        this.updateViews(serverData.id, serverData.views);
    };

    updateViews = (id, views) => {
        const { API_URL } = process.env;
        const data = {views: views + 1};

        axios.put(`${API_URL}/articles/${id}`, data)
            .then(res => {
                res.status === 200 &&
                this.setState({viewsUpdate: data.views});
            })
            .catch(err => {
                this.setState({
                    error: 'Ошибка при отправке формы, попробуйте позже!' + err
                });
            });
    }

    render() {
        const { viewsUpdate } = this.state;
        const { toggleModal, serverData: {title, description, cover, viewType, likes, views, id, created_at, comments } } = this.props;
        const view = viewType === 1 || viewType === 2 || viewType === 3;

        return (
            <>
                <MyHead
                    title={title}
                    description={description}
                    link={`/articles/${id}`}
                    robots={'all'}
                />

                <div className="container container--new" itemType="http://schema.org/NewsArticle http://schema.org/CreativeWork" itemScope>
                    <div className="image">
                        <Link href={'/news'} >
                            <a className="backwards backwards--news"/>
                        </Link>
                        { view ? <h1 className="article__title-horizontal" itemProp="headline name">{title}</h1> : ''}
                        <div className="image__wrapper">
                            <div className={`${view ? 'image__wrapper-horizontal' : 'image__wrapper-img'}`}>
                                {cover && <img src={`${process.env.API_URL}${cover.url}`} alt="" itemProp="image"/>}
                            </div>
                            <div className="image__wrapper-figure"/>
                            <div className="image__wrapper-figure"/>
                        </div>
                    </div>
                    <div className={`article ${view ? 'article__horizontal' : ''}`}>
                        { viewType === 0 || viewType === 4 ? <h1 className="article__title" itemProp="headline name">{title}</h1> : ''}
                        <div className="article__wrapper">
                            <ReactMarkdown
                                source={description}
                                className={`${view ? 'article__wrapper-horizontal' : 'article__wrapper-text'}`}
                                itemProp="description"
                            />

                            <div className="article__wrapper-nav">
                                <Icons
                                    likes={likes}
                                    idContent={id}
                                    typeContent={'articles'}
                                    views={viewsUpdate}
                                    date={returnDatePublish(created_at)}
                                    toggleModal={toggleModal}
                                />
                                <div className="article__wrapper-wrap">
                                    {description && <TimeToRead textLength={counterLetters(description)}/>}
                                    <Socials/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <CommentBlock
                    idContent={id}
                    typeContent={'articles'}
                    comments={comments}
                />
            </>
        )
    }
}

export async function getServerSideProps({ params }) {
    const { API_URL } = process.env;

    const serverData = await axios.get(`${API_URL}/articles/${params.id}`)
        .then(res => res.data)
        .catch(err => console.log(err));

    return { props: { serverData } };
}

export default NewsDetail;
