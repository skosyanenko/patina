import React, { Component } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import BookInform from 'components/BookInform';

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    };

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
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

        const { books, toggleModal } = this.props;

        return (
            <div className="main books-wrap">
                <Slider
                    {...settings}
                    ref={slider => (this.slider1 = slider)}
                    asNavFor={this.state.nav2}
                    className="books-slider"
                >
                    { books && books.map(({ title, categories, shortDescription, id, coverImage }, key) => (
                    <div className="books"
                         key={key}
                         itemType="https://schema.org/Book"
                         itemProp="book itemReviewed"
                         itemScope
                    >
                        <div className="books__text">
                            <h1 className="books__text-title" itemProp="name">{title}</h1>
                                <BookInform
                                    categories={categories}
                                    toggleModal={toggleModal}
                                />
                            <p className="books__text-description" itemProp="description">
                                {shortDescription}
                            </p>
                            <Link href={'/books/[id]'} as={`/books/${id}`}>
                                <a className="button button-white">Подробнее</a>
                            </Link>
                        </div>
                        <div className="books__wrapper">
                            <div className="books__arrow">
                                <svg className="books__arrow-prev"  onClick={this.previous}>
                                    <use href="/icons/sprite.svg#arrow"/>
                                </svg>
                            </div>
                            <div className="books__img">
                                {coverImage && <img src={`${process.env.API_URL}${coverImage.url}`} alt="" itemProp="image"/>}
                            </div>
                            <div className="books__arrow">
                                <svg className="books__arrow-next" onClick={this.next}>
                                    <use href="/icons/sprite.svg#arrow"/>
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