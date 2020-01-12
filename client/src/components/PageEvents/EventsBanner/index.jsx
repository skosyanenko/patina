import React, {Component} from 'react';
import axios from 'axios';
import './index.sass';

class EventsBanner extends Component {

    API_KEY = 'd22e48b187f2bbb68b0f1e9a09cd2022';
    LOCATION = 'Rostov,RU';
    URL = 'http://api.openweathermap.org/data/2.5/weather';

    state = {
        currentTime: '',
        dayOfWeek: '',
        weather: {},
        temp: {}
    };

    componentDidMount() {
        this.getTime();
        this.timerID = setInterval(
          () => this.getTime(),
          60000
        );
        this.getDayOfWeek();
        this.getWeather();
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    getWeather = () => {
        axios.get(`${this.URL}?q=${this.LOCATION}&appid=${this.API_KEY}&lang=ru&units=metric`)
            .then(res => this.setState({
                weather: res.data.weather[0],
                temp: res.data.main
            }))
            .catch(err => console.log(err));
    };

    getTime = () => {
        this.setState({
            currentTime: new Date().toLocaleTimeString().slice(0, 5)
        })
    };

    getDayOfWeek = () => {
        const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
        let currentDay = new Date().getDay();
        this.setState({
            dayOfWeek: daysOfWeek[currentDay]
        })
    };

    render() {
        const {dayOfWeek, weather, temp} = this.state;
        return (
            <div className="banner">
                <div className="banner__weather">
                    <div className="banner__weather-img">
                        {weather &&
                            <>
                                <img className="banner__weather-icon" src={`/images/icons/weather/${weather.icon}.svg`} alt=""/>
                                <div className="banner__weather-text">
                                    {weather.description}
                                </div>
                            </>
                        }
                    </div>
                    {temp &&
                        <div className="banner__weather-numb">
                            <div className="banner__date-text">
                                {temp.temp}°
                            </div>
                            <div className="banner__weather-temperature">
                                <span>↑ {temp.temp_max}°</span>
                                <span>↓ {temp.temp_min}°</span>
                            </div>
                        </div>
                    }
                </div>
                <div className="banner__date">
                    <div className="banner__date-text">{this.state.currentTime}</div>
                    <div className="banner__date-date">{`${dayOfWeek} ${new Date().toLocaleDateString().slice(0, 5)}`}</div>
                </div>
            </div>
        );
    }
}

export default EventsBanner;