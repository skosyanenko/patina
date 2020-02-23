import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';
import Socials from 'components/SocialsGroup';
import './index.sass';
import data from 'startData/tops';

class Tops extends Component {
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

    render() {
        const settings = {
            autoplay: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className="tops main">
                <Slider
                    {...settings}
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                >
                    {data && data.tops.map((item, key) => (
                        <div className="tops__wrapper" key={key}>
                            <div className="tops__wrapper-img">
                                <img src={item.image} alt=""/>
                            </div>
                            <div className="tops__text">
                                <Link to={'/top'} className="tops__text-title">
                                    {item.title}
                                </Link>
                                <p className="tops__text-description">
                                    {item.description}
                                </p>
                                <div>
                                    <Socials/>
                                    <div className="tops__text-buttons">
                                        <div className="button-write-top">
                                            <div className="button-write-top__img"/>
                                            <Link to={'/form/top'} className="button-write-top__text">Создать свою подборку</Link>
                                        </div>
                                        <Link to={'/top'} className="button button-white">Подробнее</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                <div className="tops__numb">
                    <Slider
                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}
                        dots={false}
                        arrows={false}
                        infinite={true}
                        slidesToShow={2}
                        slidesToScroll={1}
                        centerMode={true}
                        centerPadding={'50px'}
                    >
                        {data && data.tops.map((item, key) => (
                            <div className="tops__numb-dot" key={key}>
                                {(key + 1 <= 9) ? `0${key + 1}` : key + 1}
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Tops;