import React, { Component } from 'react';
import { returnDatePublish } from 'config/config';
import Slider from 'react-slick';
import TimelineDot from './Components/TimelineDot';

class MainTimeline extends Component {
    state = {
        events: [],
        isActive: 0
    };

    componentDidMount() {
        this.setState({
            events: this.getItems()
        })
    };

    getItems = () => {
        const  { books, charts, reviews, articles } = this.props;
        const array = {'books': books, 'charts': charts, 'reviews': reviews, 'articles': articles};

        return Object.keys(array).flatMap(item =>
            array[item].slice(0, 5).map(({title, id, created_at}) => {
                return {
                    title,
                    id,
                    date: returnDatePublish(created_at),
                    type: item
                }
            })
        )
    };

    handleClick = key => {
        this.setState({ isActive: key });
    };

    render() {
        const { events, isActive } = this.state;

        const settings = {
            infinite: false,
            swipeToSlide: true,
            slidesToShow: 9,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1920,
                    settings: {
                        slidesToShow: 9,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 6,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        };

        return (
            <div className="timeline">
                <span className="line"/>
                <Slider {...settings}>
                    {events.map((item, key) => (
                        <TimelineDot
                            item={item}
                            key={key}
                            index={key}
                            handleClick={() => this.handleClick(key)}
                            isActive={isActive}
                        />
                    ))}
                </Slider>
            </div>
        );
    }
}

export default MainTimeline;