import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { letters, returnAuthor, returnDate } from 'config/config';
import BookInform from 'components/BookInform';
import CommentBlock from 'components/CommentBlock';
import ModalFilms from 'components/ModalFilms';

class BooksDetail extends Component {
    state = {
        modalIsOpen: false,
        currentBook: {}
    };

    componentDidMount() {
        this.fetchCurrentBook();
    };

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.fetchCurrentBook();
        }
    };

    fetchCurrentBook = async () => {
        const { id } = this.props.match.params;

        return await axios.get(`/api/v1/books/${id}`)
            .then(res => {
                if (res.data) {
                    this.setState({currentBook: res.data})
                }
            })
            .catch(err => {
                console.log('Ошибка получения элементов из бд' + err)
            });
    };

    letterSubstr = (name, index) => {
        const arr = name.split(' ');
        return arr[index].substr(0, 1).toUpperCase();
    };

    letterSwitcher = (name) => {
        const letter = this.letterSubstr(name, 1);
        return letters.find(item => item.letter === letter).id;
    };

    toggleModal = bool => this.setState({modalIsOpen: bool});

    render() {
        const { modalIsOpen, currentBook } = this.state;
        const { currentBook: {authors, bookImage, categories, title, fullDescription, readLink, reviews, films} } = this.state;

        return (
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
                                <img src={bookImage} alt="" itemProp="image"/>
                            </div>
                                { authors && authors.length === 1 && authors.map((item, key) => (
                                    <Fragment key={key}>
                                        <svg className="cover__wrapper-letBig" >
                                            <use href={`/images/icons/sprite-alphabet.svg#${this.letterSwitcher(item.name)}`}/>
                                        </svg>
                                        <div className="cover__wrapper-letSmall">{this.letterSubstr(item.name, 0)}</div>
                                    </Fragment>
                                ))}
                                <div className="cover__wrapper-author">
                                    <h3 className="cover__wrapper-name" itemProp="author">{returnAuthor(authors)}</h3>
                                    <div className="cover__wrapper-date">{returnDate(authors)}</div>
                                </div>
                        </div>
                        <BookInform categories={categories}/>
                    </div>
                    <div className="description">
                        <h1 className="description__title" itemProp="name">{title}</h1>
                        <div className="description__text"
                             itemProp="description"
                             dangerouslySetInnerHTML={{__html: `${fullDescription}`}}
                        />
                        <div className="description__buttons">
                            { readLink && <a href={readLink} className="button button-white">Читать</a>}
                            { reviews &&
                                <Link href={'/reviews/[id]'} as={`/reviews/${reviews}`}>
                                    <a className="button button-green">Рецензии</a>
                                </Link>
                            }
                            { films != null && films.length > 0 &&
                                <div className="button button-green" onClick={this.toggleModal}>Экранизации</div>
                            }
                        </div>
                    </div>
                </div>
                <CommentBlock bookId={currentBook.id}/>
                <ModalFilms
                    isOpen={modalIsOpen}
                    toggleModal={this.toggleModal}
                    films={currentBook.films}
                />
            </div>
        );
    }
}

export default BooksDetail;

