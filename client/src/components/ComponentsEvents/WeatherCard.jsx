import React, { Component } from 'react';
import axios from 'axios';

class WeatherCard extends Component {
    state = {
        currentTime: '',
        dayOfWeek: '',
        weather: {},
        temp: {}
    };

    API_KEY = 'd22e48b187f2bbb68b0f1e9a09cd2022';
    LOCATION = 'Rostov,RU';
    URL = 'https://api.openweathermap.org/data/2.5/weather';

    componentDidMount() {
        this.getTime();
        this.timerID = setInterval(
          () => this.getTime(),
          60000
        );
        this.getDayOfWeek();
        this.getWeather();
    };

    componentWillUnmount() {
        clearInterval(this.timerID);
    };

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
            currentTime: new Date().toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit'
            })
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
        const { dayOfWeek, weather, temp } = this.state;

        return (
            <div className="banner">
                <div className="banner__wrapper">
                    <div className="banner__wrapper-img">
                        { weather &&
                            <>
                                <svg className="banner__wrapper-icon">
                                    <use href={`/icons/sprite-weather.svg#${weather.icon}`}/>
                                </svg>
                                <div className="banner__wrapper-text">
                                    {weather.description}
                                </div>
                            </>
                        }
                    </div>
                    { temp &&
                        <div className="banner__numb">
                            <span className="banner__numb-text">
                                {temp.temp}°
                            </span>
                            <div className="banner__numb-temperature">
                                <span>↑ {temp.temp_max}°</span>
                                <span>↓ {temp.temp_min}°</span>
                            </div>
                        </div>
                    }
                </div>
                <div className="banner__date">
                    <span className="banner__date-text">{this.state.currentTime}</span>
                    <span className="banner__date-date">{`${dayOfWeek} ${new Date().toLocaleDateString().slice(0, 5)}`}</span>
                </div>
            </div>
        );
    }
}

export default WeatherCard;