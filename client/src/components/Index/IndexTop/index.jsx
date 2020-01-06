import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';
import './index.sass';
import data from 'startData/tops';

class IndexTop extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            dotsClass: 'indexTop__numb',
            customPaging: i => (
              <div className="indexTop__numb-dot" onClick={this.slider}>
                  {(i + 1 <= 9) ? `0${i + 1}` : i + 1}
              </div>
            )
        };
        return (
            <div className="indexTop index-wrapper">
                <Slider {...settings}>
                    {data && data.tops.map((item, key) => (
                        <div className="indexTop__slider">
                            <div className="indexTop__slider-img">
                                <img src={item.image} alt=""/>
                            </div>
                            <div className="indexTop__slider-about">
                                <Link to={'/top'} className="indexTop__slider-title">
                                    {item.title}
                                </Link>
                                <div className="indexTop__slider-text">
                                    {item.description}
                                </div>
                                <Link to={'/top'} className="button-black">Далее</Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

export default IndexTop;