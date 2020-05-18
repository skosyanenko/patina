import React, { Component, Fragment } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { letters, returnAuthor, returnDate } from 'config/config';
import BookInform from 'components/BookInform';
import CommentBlock from 'components/CommentBlock';
import ModalFilms from 'components/ModalFilms';
import MyHead from 'components/MyHead';

class BooksDetail extends Component {
    state = {
        modalIsOpen: false,
        currentBook: {}
    };

    componentDidMount() {
        this.getItems();
    };

    componentDidUpdate(prevProps) {
        if (this.props.router.query.id !== prevProps.router.query.id) {
            axios.get(`${process.env.API_URL}/books/${this.props.router.query.id}`)
            .then(res => {
                this.setState({ currentBook: res.data })
            })
            .catch(err => console.log(err));
        }
    };

    getItems = () => {
        const { serverData } = this.props;
        this.setState({ currentBook: serverData })
    };

    letterSubstr = (name, index) => {
        const arr = name.split(' ');
        return arr[index].substr(0, 1).toUpperCase();
    };

    letterSwitcher = (name) => {
        const letter = this.letterSubstr(name, 1);
        return letters.find(item => item.letter === letter).id;
    };

    toggleFilms = () => this.setState(prevState => ({modalIsOpen: !prevState.modalIsOpen}));

    render() {
        const { modalIsOpen } = this.state;
        const { currentBook: {authors, bookImage, categories, title, fullDescription, shortDescription, readLink, reviews, films, id, weight, comments, bookmarked} } = this.state;
        const { toggleModal } = this.props;

        return (
            <>
                <MyHead
                    title={title}
                    description={shortDescription}
                    link={`/books/${id}`}
                    robots={'all'}
                />
                <div className={`${modalIsOpen && 'blur'}`}
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
                                    {bookImage && <img src={`${process.env.API_URL}${bookImage.url}`} alt="" itemProp="image"/>}
                                </div>
                                    { authors && authors.length === 1 && authors.map((item, key) => (
                                        <Fragment key={key}>
                                            <svg className="cover__wrapper-letBig" >
                                                <use href={`/icons/sprite-alphabet.svg#${this.letterSwitcher(item.name)}`}/>
                                            </svg>
                                            <div className="cover__wrapper-letSmall">{this.letterSubstr(item.name, 0)}</div>
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
                                bookmarked={bookmarked}
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
                                { reviews &&
                                    <Link href={'/reviews/[id]'} as={`/reviews/${reviews}`}>
                                        <a className="button button-green">Рецензии</a>
                                    </Link>
                                }
                                { films != null && films.length > 0 &&
                                    <div className="button button-green" onClick={this.toggleFilms}>Экранизации</div>
                                }
                            </div>
                        </div>
                    </div>
                    <CommentBlock
                        idContent={id}
                        typeContent={'books'}
                        comments={comments}
                    />
                    <ModalFilms
                        isOpen={modalIsOpen}
                        toggleModal={this.toggleFilms}
                        films={films}
                    />
                </div>
            </>
        );
    }
}

export async function getServerSideProps({ params }) {
    const { API_URL } = process.env;

    const serverData = await axios.get(`${API_URL}/books/${params.id}`)
        .then(res => {
            console.log(res.data)
            return res.data
        })
        .catch(err => console.log(err));

    return { props: { serverData } };
}

export default withRouter(BooksDetail);

