import React, {Component} from 'react';
import axios from 'axios';
import Title from './Title';
import Event from './Event';
import WeatherCard from './WeatherCard';

class EventsPage extends Component {
    state = {
    	events: [],
        pictures: [
            [
                {name: 'skates', key: 4},
                {name: 'ball', key: 9},
                {name: 'bullfinch', key: 20}
            ],
            [
                {name: 'butterfly', key: 4},
                {name: 'flower', key: 9},
                {name: 'dandelion', key: 20}
            ],
            [
                {name: 'dragonfly', key: 4},
                {name: 'raspberries', key: 9},
                {name: 'shell', key: 20}
            ],
            [
                {name: 'umbrella', key: 4},
                {name: 'acorn', key: 9},
                {name: 'leaf', key: 20}
            ]
        ]
    };

    showPictures = (number) => {
        switch (number) {
            case 1 || 2 || 12:
                return 0;
            case 3 || 4 || 5:
                return 1;
            case 6 || 7 || 8:
                return 2;
            case 9 || 10 || 11:
                return 3;
        }
    };

    fetchAllEvents = async () => {
		return await axios.get('/api/v1/events')
			.then(res => {
				if (res.data) {
                    res.data.unshift({type: 'card'});
					return res.data;
				}
			})
			.catch(err => {
				console.log('Ошибка получения элементов из бд' + err)
			});
    };

	componentDidMount() {
		this.fetchAllEvents().then(res => {
			this.setState({events: res})
		});
	}

	render() {
        const {pictures, events} = this.state;

        return (
            <>
                <Title/>
                <div className="container">
                    <div className="events-wrapper">
                        {events && events.map((field, key) => {
                            const picture = pictures[this.showPictures(new Date().getMonth() + 1)].find(item => item.key === key);
                            const Component = field.type === 'card' ? WeatherCard : Event;
                            return <Component key={key} picture={picture && picture.name} {...field}/>;
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default EventsPage;


