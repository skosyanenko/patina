import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { returnAuthor } from 'config/config';
import Socials from 'components/SocialsGroup';
import CommentBlock from 'components/CommentBlock';
import MyHead from 'components/MyHead';
import UndefinedPage from 'pages/404';

const ChartsDetail = ({ router, chart }) => {
    const { isFallback } = useRouter();

    if (!isFallback && !chart) {
        return <UndefinedPage/>;
    }

    if (router.isFallback) {
        return '';
    }

    const { title, description, books, id } = chart;

    return(
        <>
            <MyHead
                title={title}
                description={description}
                link={`/charts/${id}`}
                robots={'all'}
            />
            <div itemType="http://schema.org/ItemList http://schema.org/CreativeWork" itemScope>
            <div className="depiction" >
                <div className="depiction__wrapper">
                    <Link href={'/charts'} >
                        <a className="backwards"/>
                    </Link>
                    <h1 className="depiction__wrapper-title" itemProp="name">{title}</h1>
                </div>
                <ReactMarkdown
                    source={description}
                    className="depiction__description"
                />
            </div>
            <div className="container">
                <div className="top-grid">
                    { books && books.map((item, key) => (
                        <div className="block"
                             itemProp="itemListElement"
                             itemType="https://schema.org/Book"
                             itemScope
                             key={key}
                        >
                            <div className="block__wrapper">
                                <div className="block__title" itemProp="name">
                                    <Link href={'/books/[id]'} as={`/books/${item.id}`}>
                                        <a itemProp="url" content={`patina.now.sh/books/${item.id}`}>
                                            {item.title}
                                        </a>
                                    </Link>
                                </div>
                                <div className="block__number">
                                    <Link href={'/books/[id]'} as={`/books/${item.id}`}>
                                        <a itemProp="position" content={key + 1}>
                                            {key + 1}
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <span className="block__author" itemProp="author">{returnAuthor(item.authors)}</span>
                            <span className="block__description" itemProp="description">
                                {item.shortDescription}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="icons-wrap">
                <div className="icons-wrap__socials">
                    <Socials isBookmarks={false}/>
                </div>
            </div>
            <CommentBlock
                idContent={id}
                typeContent={'charts'}
            />
        </div>
        </>
    );
}

export async function getStaticPaths() {
    const { API_URL } = process.env;

    const res = await axios.get(`${API_URL}/charts`)
    const charts = await res.data

    const paths = charts.map(chart => `/charts/${chart.id}`)

    return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
    const { API_URL } = process.env;

    const res = await axios.get(`${API_URL}/charts/${params.id}`)
    const chart = await res.data &&
        {
            id: res.data.id,
            title: res.data.title,
            description: res.data.description,
            books: res.data.books
        };

    return { props: { chart } }
}

export default ChartsDetail;
