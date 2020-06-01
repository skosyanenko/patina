import React, { useState } from 'react';
import { useImmer } from 'use-immer';
import axios from 'axios';
import useSWR from 'swr';
import sortBy from 'lodash.sortby';
import Slider from 'react-slick';
import { returnDatePublish } from 'config/config';
import TimelineDot from './Components/TimelineDot';

const { API_URL } = process.env;

const MainTimeline = () => {
    const types = ['books', 'charts', 'reviews', 'articles'];

    const [active, setActive] = useState(0);

    const [events, setEvents] = useImmer([]);

    const getItems = (url, type) => {
        axios.get(url)
            .then(res => {
                if (res.status === 200 ) {
                    res.data.forEach(item => {
                        setEvents(draft => {
                            draft.push({
                                id: item.id,
                                title: item.title,
                                date: returnDatePublish(item.created_at),
                                type: type
                            })
                        })
                    });
                }
            })
            .catch(err => {
                console.log('Ошибка получения элементов из бд' + err)
            })
    };

    types.forEach(async type => {
        await useSWR([`${API_URL}/${type}?_limit=5`, type], (url, type) => getItems(url, type));
    });

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
                {events.length && sortBy(events, item => item.date).map((item, key) => (
                    <TimelineDot
                        item={item}
                        key={key}
                        index={key}
                        handleClick={() => setActive(key)}
                        isActive={active}
                    />
                ))}
            </Slider>
        </div>
    );
}

export default  React.memo(MainTimeline);
