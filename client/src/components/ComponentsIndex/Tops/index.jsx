import React, { PureComponent } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Socials from 'components/SocialsGroup';

class Tops extends PureComponent {
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

    render() {
        const settings = {
            autoplay: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        const { charts } = this.props;

        return (
            <div className="tops main">
                <Slider
                    {...settings}
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                >
                    { charts && charts.map(({ image, id, title, description }, key) => (
                        <div className="tops__wrapper"
                             key={key}
                             itemScope
                             itemType="http://schema.org/CreativeWork"
                        >
                            <Link href={'/charts/[id]'} as={`/charts/${id}`}>
                                <a className="tops__wrapper-img">
                                    {image &&
                                        <LazyLoadComponent id="bookPicture">
                                            <picture>
                                                <source media="(max-width: 1920px)" srcSet={`${image.url}`}/>
                                                <source media="(max-width: 767px)" srcSet={`${image.formats.small.url}`}/>
                                                <img src={`${image.url}`} alt="" itemProp="image"/>
                                            </picture>
                                        </LazyLoadComponent>
                                    }
                                </a>
                            </Link>
                            <div className="tops__text">
                                <Link href={'/charts/[id]'} as={`/charts/${id}`}>
                                    <a className="tops__text-title" itemProp="name">
                                        {title}
                                    </a>
                                </Link>
                                <div className="tops__text-description"
                                     dangerouslySetInnerHTML={{__html: `${description}`}}
                                     itemProp="description"
                                />
                                <>
                                    <div className="tops__text-buttons">
                                        <Socials isBookmarks={false}/>
                                        <Link href={'/charts/[id]'} as={`/charts/${id}`}>
                                            <a className="button button-white">Подробнее</a>
                                        </Link>
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