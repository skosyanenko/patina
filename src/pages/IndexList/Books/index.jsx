import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import axios from 'axios';
import BookInform from 'components/BookInform';
import './index.sass';

class Books extends Component {
    state = {
        books: []
    };

    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    };

    componentDidMount() {
        this.fetchBooksMainPage();
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    };

    fetchBooksMainPage = () => {
        axios.get('/api/v1/booksMainPage')
            .then(res => {
                res.data &&
                this.setState({
                    books: res.data
            })
            })
            .catch(err => {
                console.log('Ошибка получения элементов из бд' + err)
            });
    };

    next = () => this.slider1.slickNext();

    previous = () => this.slider1.slickPrev();

    render() {
        const settings = {
            fade: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        const { books } = this.state;

        return (
            <div className="main books-wrap">
                <Slider
                    {...settings}
                    ref={slider => (this.slider1 = slider)}
                    asNavFor={this.state.nav2}
                    className="books-slider"
                >
                    { books && books.map((book, key) => (
                    <div className="books"
                         key={key}
                         itemType="https://schema.org/Book"
                         itemProp="book itemReviewed"
                         itemScope
                    >
                        <div className="books__text">
                            <h1 className="books__text-title" itemProp="name">{book.title}</h1>
                                <BookInform categories={book.categories}/>
                            <p className="books__text-description" itemProp="description">
                                {book.shortDescription}
                            </p>
                            <Link to={`/books/${book.id}`} className="button button-white">Подробнее</Link>
                        </div>
                        <div className="books__wrapper">
                            <div className="books__arrow">
                                <svg className="books__arrow-prev"  onClick={this.previous}>
                                    <use href="/images/icons/sprite.svg#arrow"/>
                                </svg>
                            </div>
                            <div className="books__img">
                                <img src={book.coverImage} alt="" itemProp="image"/>
                            </div>
                            <div className="books__arrow">
                                <svg className="books__arrow-next" onClick={this.next}>
                                    <use href="/images/icons/sprite.svg#arrow"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    ))}
                </Slider>
                <div className="books__numb">
                    <Slider
                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}
                        dots={false}
                        arrows={false}
                        infinite={true}
                        slidesToShow={3}
                        slidesToScroll={1}
                        vertical={true}
                        centerMode={true}
                        useTransform={true}
                    >
                        { books && books.map((item, key) => (
                            <div className="books__numb-dot" key={key}>
                                {(key + 1 <= 9) ? `0${key + 1}` : key + 1}
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        )
    }
}

export default Books;