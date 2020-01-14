import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';
import './index.sass';
import data from 'startData/tops';
import Socials from "../../SocialsGroup";

class IndexTop extends Component {
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
        return (
            <div className="indexTop index-wrapper">
                <Slider
                    speed={500}
                    infinite={true}
                    slidesToShow={1}
                    slidesToScroll={1}
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                >
                    {data && data.tops.map((item, key) => (
                        <div className="indexTop__slider" key={key}>
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
                                <div>
                                    <Socials/>
                                    <div className="indexTop__slider-buttons">
                                        <div className="buttonWriteTop">
                                            <div className="buttonWriteTop__img"/>
                                            <div className="buttonWriteTop__text">Создать свою подборку</div>
                                        </div>
                                        <Link to={'/top'} className="button buttonWhite">Подробнее</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="indexTop__numb">
                    <Slider
                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}
                        dots={false}
                        arrows={false}
                        infinite={true}
                        focusOnSelect={true}
                        slidesToShow={2}
                        slidesToScroll={1}
                        centerMode={true}
                        centerPadding={'50px'}
                    >
                        {data && data.tops.map((item, key) => (
                            <div className="indexTop__numb-dot" key={key}>
                                {(key + 1 <= 9) ? `0${key + 1}` : key + 1}
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default IndexTop;