import React, { Component } from 'react';
import TextFx from 'services/TextFx';
import { effectForTitle, MONTHS } from 'config/config';
import axios from 'axios';
import Event from './Components/Event';
import WeatherCard from './Components/WeatherCard';
import EventPicture from './Components/EventPicture';
import './index.sass';

class EventsList extends Component {
    state = {
        month: '',
    	events: [],
        pictures: [
            [
                {name: 'skates', key: 6},
                {name: 'ball', key: 2},
                {name: 'bullfinch', key: 1}
            ],
            [
                {name: 'butterfly', key: 6},
                {name: 'flower', key: 2},
                {name: 'dandelion', key: 1}
            ],
            [
                {name: 'dragonfly', key: 6},
                {name: 'raspberries', key: 2},
                {name: 'shell', key: 1}
            ],
            [
                {name: 'umbrella', key: 6},
                {name: 'acorn', key: 2},
                {name: 'leaf', key: 1}
            ]
        ],
        quarters: {
    	    0: [1, 2, 12],
            1: [3, 4, 5],
            2: [6, 7, 8],
            3: [9, 10, 11]
        }
    };

    componentDidMount() {
        this.getCurrentMonth();
        this.fetchAllEvents().then(res => {
            this.setState({events: res})
        });
    };

    showPictures = () => {
        const {quarters, pictures} = this.state;
        const month = new Date().getMonth() + 1;
        const index = Object.keys(quarters).find(item => quarters[item].includes(month));
        return pictures[index];
    };

    fetchAllEvents = async () => {
		return await axios.get('/api/v1/events')
			.then(res => {
				if (res.data) {
				    const additionalItems = [
                        {type: 'picture'},
                        {type: 'picture'},
                        {type: 'card'}
                    ];
                    additionalItems.forEach(item => res.data.unshift(item));
					return res.data;
				}
			})
			.catch(err => {
				console.log('Ошибка получения элементов из бд' + err)
			});
    };

	switchTypes = (type) => {
	    switch(type) {
            case 'card':
                return WeatherCard;
            case 'picture':
                return EventPicture;
            default:
                return Event;
        }
    };

    getCurrentMonth = () => {
        let currentMonth = new Date().getMonth();
        this.setState({
            month: MONTHS[currentMonth]
        }, () => {
            this.animateTitle();
        });
    };

    animateTitle = () => {
        const animatedTitle = new TextFx(this.title, effectForTitle);
        animatedTitle.hide();
        setTimeout(() => {
            animatedTitle.show(effectForTitle, () => this.subtitle && this.subtitle.classList.add('active'));
        }, 300);
    };

	render() {
        const { events, month } = this.state;

        return (
            <>
                <div className="events-wrap">
                    <span className="events-wrap__title" ref={node => this.title = node}>
                        { month }
                    </span>
                    <span className="events-wrap__subtitle" ref={node => this.subtitle = node}>в Ростове-на-Дону</span>
                </div>
                <div className="container">
                    <div className="events-wrapper">
                        {events && events.map((field, key) => {
                            const picture = this.showPictures().find(item => item.key === key);
                            const Component = this.switchTypes(field.type);
                            return <Component key={key} picture={picture && picture.name} {...field}/>;
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default EventsList;


