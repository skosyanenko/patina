import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';
import './index.sass';
import data from 'startData/booksTest';
import Rating from '../../Rating';
import BookInform from "../../BookInform";

class IndexBook extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
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
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            //dots: true,
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
            <div className="index-wrapper">
                <Slider
                    {...settings}
                    // asNavFor={this.state.nav2}
                    ref={c => (this.slider = c)}
                >
                    {data && data.books.map((item, key) => (
                    <div className="indexBook" key={key}>
                        <div className="indexBook__about">
                            <div className="indexBook__about-title">{item.title}</div>
                            <div className="indexBook__about-nav">
                                <BookInform/>
                                <Link to={'/top'} className="button buttonWhite">Подробнее</Link>
                            </div>

                            <div className="indexBook__about-text">
                                {item.shortDescription}
                            </div>
                        </div>
                        <div className="indexBook__slider">
                            <div className="indexBook__slider-arrow" onClick={this.previous}>
                                <svg viewBox="0 0 306 306">
                                    <use href="/images/icons/arrows.svg#arrow"/>
                                </svg>
                            </div>
                            <div className="indexBook__slider-img">
                                <img src={item.coverImage} alt=""/>
                            </div>
                            <div className="indexBook__slider-arrow" onClick={this.next}>
                                <svg viewBox="0 0 306 306">
                                    <use href="/images/icons/arrows.svg#arrow"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    ))}
                </Slider>

                {/*<div className="indexBook__numb">*/}
                {/*    <Slider*/}
                {/*        asNavFor={this.state.nav1}*/}
                {/*        ref={slider => (this.slider2 = slider)}*/}
                {/*        dots={false}*/}
                {/*        arrows={false}*/}
                {/*        infinite={true}*/}
                {/*        focusOnSelect={true}*/}
                {/*        slidesToShow={3}*/}
                {/*        slidesToScroll={1}*/}
                {/*        vertical={true}*/}
                {/*        // verticalSwiping={true}*/}
                {/*    >*/}
                {/*    {data && data.books.map((item, key) => (*/}
                {/*        <div className="indexBook__numb-dot" key={key}>*/}
                {/*            {(key + 1 <= 9) ? `0${key + 1}` : key + 1}*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*    </Slider>*/}
                {/*</div>*/}
            </div>
        )
    }
}

IndexBook.propTypes = {};

export default IndexBook;