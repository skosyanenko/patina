import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import { counterLetters, returnDatePublish} from 'config/config';
import ReactMarkdown from 'react-markdown';
import Icons from 'components/Icons';
import Socials from 'components/SocialsGroup';
import TimeToRead from 'components/TimeToRead';
import CommentBlock from 'components/CommentBlock';
import MyHead from 'components/MyHead';
import UndefinedPage from 'pages/404';

const { API_URL } = process.env;

const NewsDetail = ({ router, toggleModal, article }) => {

    const [state, setState] = useState(0);

    const { isFallback } = useRouter();

    if (!isFallback && !article) {
        return <UndefinedPage/>;
    }

    if (router.isFallback) {
        return '';
    }

    useEffect(() => {
        updateViews(article.id, article.views);
    }, [article]);

    const { title, description, cover, viewType, views, id, created_at } = article;

    const updateViews = (id, views) => {
        const data = {views: views + 1};

        axios.put(`${API_URL}/articles/${id}`, data)
            .then(res => {
                if (res.status === 200) {
                    setState(data.views)
                }
            })
            .catch(err => {
                console.log('Ошибка при отправке формы, попробуйте позже!' + err)
            });
    };

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
                    <Link href={'/articles'} >
                        <a className="backwards backwards--news"/>
                    </Link>
                    { view ? <h1 className="article__title-horizontal" itemProp="headline name">{title}</h1> : ''}
                    <div className="image__wrapper">
                        <div className={`${view ? 'image__wrapper-horizontal' : 'image__wrapper-img'}`}>
                            {cover && <img src={`${cover.url}`} alt="" itemProp="image"/>}
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
                                idContent={id}
                                typeContent={'articles'}
                                views={state}
                                date={returnDatePublish(created_at)}
                                toggleModal={toggleModal}
                                isAllIcons={true}
                            />
                            <div className="article__wrapper-wrap">
                                {description && <TimeToRead textLength={counterLetters(description)}/>}
                                <Socials isBookmarks={false}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CommentBlock
                idContent={id}
                typeContent={'articles'}
            />
        </>
    )
}

export async function getStaticPaths() {
    const { API_URL } = process.env;

    const res = await axios.get(`${API_URL}/articles`)
    const articles = await res.data

    const paths = articles.map(article => `/articles/${article.id}`)

    return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
    const { API_URL } = process.env;

    const res = await axios.get(`${API_URL}/articles/${params.id}`)
    const article = await res.data;

    return { props: { article } }
}

export default NewsDetail;
