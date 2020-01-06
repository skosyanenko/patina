import React, {Component} from 'react';
import './index.sass';

class EventsBanner extends Component {
    state = {
        currentTime: '',
        dayOfWeek: ''
    };

    componentDidMount() {
        this.getTime();
        this.timerID = setInterval(
          () => this.getTime(),
          1000
        );
        this.getDayOfWeek();
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

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
        const {dayOfWeek} = this.state;
        return (
        <div className="banner">
            <div className="banner__weather">
                <div className="banner__weather-img">
                    <img className="banner__weather-icon" src="/images/icons/weather/wi-day-sunny.svg" alt=""/>
                    <div className="banner__weather-text">Солнечно</div>
                </div>
                <div className="banner__weather-numb">
                    <div className="banner__date-text">17°</div>
                    <div className="banner__weather-temperature">
                        <div>↑ 14°</div>
                        <div>↓ 14°</div>
                    </div>
                </div>
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