import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';
import './index.sass';
import data from 'startData/booksTest';
import Rating from '../../Rating';

class IndexBook extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            dotsClass: 'indexBook__numb',
            customPaging: i => (
                <div className="indexBook__numb-dot">
                    {(i + 1 <= 9) ? `0${i + 1}` : i + 1}
                </div>
            )
        };
        return (
            <Slider ref={c => (this.slider = c)} {...settings}>
                {data && data.books.map((item, key) => (
                    <div className="indexBook index-wrapper" key={1}>
                        <div className="indexBook__about">
                            <div className="indexBook__about-title">
                                <div className="indexBook__about-numb">02</div>
                                <div className="indexBook__about-name">{item.title}</div>
                            </div>
                            <div className="indexBook__about-tags">
                                {item && item.tags.map((tag, key) => (
                                  <Link to={'/top'} className="tag">{tag}</Link>
                                ))}
                            </div>
                            <div className="indexBook__about-rating">
                                <Rating/>
                                <Link to={'/top'} className="button-black">Далее</Link>
                            </div>
                            <div className="indexBook__about-text">
                                {item.shortDescription}
                            </div>
                        </div>
                        <div className="indexBook__slider">
                            <div className="indexBook__slider-arrow" onClick={this.previous}/>
                            <div className="indexBook__slider-img">
                                <img src={item.coverImage} alt=""/>
                            </div>
                            <div className="indexBook__slider-arrow" onClick={this.next}/>
                        </div>
                    </div>
                ))}
            </Slider>
        )
    }
}

IndexBook.propTypes = {};

export default IndexBook;