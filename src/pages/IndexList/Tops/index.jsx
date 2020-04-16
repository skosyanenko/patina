import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import axios from 'axios';
import Socials from 'components/SocialsGroup';
import './index.sass';

class Tops extends Component {
    state = {
        charts: []
    };

    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    };

    componentDidMount() {
        this.fetchChartsMainPage();
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    };

    fetchChartsMainPage = () => {
        axios.get('/api/v1/chartsMainPage')
            .then(res => {
                res.data &&
                this.setState({
                    charts: res.data
                })
            })
            .catch(err => {
                console.log('Ошибка получения элементов из бд' + err)
            });
    };

    render() {
        const settings = {
            autoplay: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        const { charts } = this.state;

        return (
            <div className="tops main">
                <Slider
                    {...settings}
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                >
                    { charts && charts.map((item, key) => (
                        <div className="tops__wrapper"
                             key={key}
                             itemScope
                             itemType="http://schema.org/CreativeWork"
                        >
                            <div className="tops__wrapper-img">
                                <img src={item.image} alt="" itemProp="image"/>
                            </div>
                            <div className="tops__text">
                                <Link to={`/charts/${item.id}`} className="tops__text-title" itemProp="name">
                                    {item.title}
                                </Link>
                                <div className="tops__text-description"
                                   dangerouslySetInnerHTML={{__html: `${item.description}`}}
                                     itemProp="description"
                                />
                                <>
                                    <Socials/>
                                    <div className="tops__text-buttons">
                                        <div className="button-write-top">
                                            <div className="button-write-top__img"/>
                                            <Link to={'/form/charts'} className="button-write-top__text">Создать свою подборку</Link>
                                        </div>
                                        <Link to={`/charts/${item.id}`} className="button button-white">Подробнее</Link>
                                    </div>
                                </>
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
                        slidesToShow={3}
                        slidesToScroll={1}
                        centerMode={true}
                        variableWidth={true}
                    >
                        { charts && charts.map((item, key) => (
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