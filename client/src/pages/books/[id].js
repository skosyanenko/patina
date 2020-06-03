import React, { useState, Fragment } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { letters, returnAuthor, returnDate } from 'config/config';
import BookInform from 'components/BookInform';
import CommentBlock from 'components/CommentBlock';
import ModalFilms from 'components/ModalFilms';
import MyHead from 'components/MyHead';
import UndefinedPage from 'pages/404';
import LinkToReview from 'components/LinkToReview';

const { API_URL } = process.env;

const BooksDetail = ({ router, toggleModal, book }) => {
    const [modal, setModal] = useState(false);

    const { isFallback } = useRouter();

    if (!isFallback && !book) {
        return <UndefinedPage/>;
    }

    if (router.isFallback) {
        return '';
    }

    const { authors, bookImage, categories, title, fullDescription, shortDescription, readLink, films, id, weight } = book;

    const letterSubstr = (name, index) => {
        const arr = name.split(' ');
        return arr[index].substr(0, 1).toUpperCase();
    };

    const letterSwitcher = (name) => {
        const letter = letterSubstr(name, 1);
        return letters.find(item => item.letter === letter).id;
    };

    return (
        <>
            <MyHead
                title={title}
                description={shortDescription}
                link={`/books/${id}`}
                robots={'all'}
            />
            <div className={`${modal && 'blur'}`}
                 itemType="https://schema.org/Book"
                 itemProp="book itemReviewed"
                 itemScope
            >
                <div className="container container--book-detail">
                    <div className="cover">
                        <Link href={'/books'}>
                            <a className="backwards"/>
                        </Link>
                        <div className="cover__wrapper">
                            <div className="cover__wrapper-img">
                                {bookImage && <img src={`${bookImage.url}`} alt="" itemProp="image"/>}
                            </div>
                                { authors && authors.length === 1 && authors.map((item, key) => (
                                    <Fragment key={key}>
                                        <svg className="cover__wrapper-letBig" >
                                            <use href={`/icons/sprite-alphabet.svg#${letterSwitcher(item.name)}`}/>
                                        </svg>
                                        <div className="cover__wrapper-letSmall">{letterSubstr(item.name, 0)}</div>
                                    </Fragment>
                                ))}
                                <div className="cover__wrapper-author">
                                    <h3 className="cover__wrapper-name" itemProp="author">{returnAuthor(authors)}</h3>
                                    <div className="cover__wrapper-date">{returnDate(authors)}</div>
                                </div>
                        </div>
                        <BookInform
                            idContent={id}
                            titleContent={title}
                            description={shortDescription}
                            weight={weight}
                            image={bookImage}
                            categories={categories}
                            toggleModal={toggleModal}
                        />
                    </div>
                    <div className="description">
                        <h1 className="description__title" itemProp="name">{title}</h1>
                        <ReactMarkdown
                            source={fullDescription}
                            className="description__text"
                            itemProp="description"
                        />
                        <div className="description__buttons">
                            { readLink && <a href={readLink} className="button button-white">Читать</a>}
                            <LinkToReview idContent={id}/>
                            { films != null && films.length > 0 &&
                                <div className="button button-green" onClick={() => setModal(true)}>Экранизации</div>
                            }
                        </div>
                        <CommentBlock
                            idContent={id}
                            typeContent={'books'}
                        />
                    </div>
                </div>
                <ModalFilms
                    isOpen={modal}
                    toggleModal={setModal}
                    films={films}
                />
            </div>
        </>
    );
}

export async function getStaticPaths() {
    const res = await axios.get(`${API_URL}/books`)
    const books = await res.data

    const paths = books.map(book => `/books/${book.id}`)

    return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
    const res = await axios.get(`${API_URL}/books/${params.id}`)
    const book = await res.data &&
        {
            id: res.data.id,
            title: res.data.title,
            fullDescription: res.data.fullDescription,
            bookImage: res.data.bookImage,
            readLink: res.data.readLink,
            categories: res.data.categories,
            authors: res.data.authors,
            films: res.data.films
        };

    return { props: { book } }
}

export default BooksDetail;

