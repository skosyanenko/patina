import React, { Component } from 'react';
import { returnDatePublish } from 'config/config';
import Swiper from 'react-id-swiper';
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
            array[item].slice(0, 3).map(({title, id, created_at}) => {
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
        const params = {
            slidesPerView: 'auto',
            freeMode: true,
            centeredSlides: true,
            initialSlide: 'auto',
            speed: 1000,
            mousewheel: true,
            grabCursor: true
        };

        return (
            <div className="timeline">
                <span className="line"/>
                <div className="timeline__wrap">
                    <Swiper {...params} containerClass="swiper">
                        {events.map((item, key) => (
                            <TimelineDot
                                item={item}
                                key={key}
                                index={key}
                                handleClick={() => this.handleClick(key)}
                                isActive={isActive}
                            />
                        ))}
                    </Swiper>
                </div>

            </div>
        );
    }
}

export default MainTimeline;