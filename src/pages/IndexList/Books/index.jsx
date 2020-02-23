import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';
import BookInform from 'components/BookInform';
import './index.sass';
import data from 'startData/booksTest';

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    next = () => this.slider1.slickNext();

    previous = () => this.slider1.slickPrev();

    render() {
        const settings = {
            fade: true,
            infinite: true,
            autoplay: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return (
            <div className="main books-wrap">
                <Slider
                    {...settings}
                    ref={slider => (this.slider1 = slider)}
                    asNavFor={this.state.nav2}
                    className="books-slider"
                >
                    {data && data.books.map((item, key) => (
                    <div className="books" key={key}>
                        <div className="books__text">
                            <h1 className="books__text-title">{item.title}</h1>
                                <BookInform bookId={item.id}/>
                            <p className="books__text-description">
                                {item.shortDescription}
                            </p>
                            <Link to={'/book'} className="button button-white">Подробнее</Link>
                        </div>
                        <div className="books__wrapper">
                            <div className="books__arrow">
                                <svg className="books__arrow-prev"  onClick={this.previous}>
                                    <use href="/images/icons/sprite.svg#arrow"/>
                                </svg>
                            </div>
                            <div className="books__img">
                                <img src={item.coverImage} alt=""/>
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
                    {data && data.books.map((item, key) => (
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