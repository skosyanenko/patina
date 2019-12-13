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
            <div className="banner__row">
                <div className="banner__row-time">{this.state.currentTime}</div>
                <div className="banner__row-date">{`${dayOfWeek} ${new Date().toLocaleDateString().slice(0, 5)}`}</div>
            </div>
            <div className="banner__icons">
                <div className="banner__column">
                    <div className="banner__column-icon"
                        style={{
                        background: `url('/images/icons/weather/wi-day-sunny.svg') no-repeat 28% top / 65%`
                    }} />
                    <div className="banner__column-count">солнечно</div>
                </div>
                <div className="banner__column">
                    <div className="banner__column-icon"
                        style={{
                        background: `url('/images/icons/weather/wi-strong-wind.svg') no-repeat 28% top / 65%`
                    }} />
                    <div className="banner__column-count">слабый</div>
                </div>
                <div className="banner__column">
                    <div className="banner__column-icon"
                        style={{
                        background: `url('/images/icons/weather/wi-windy.svg') no-repeat 28% top / 65%`
                    }} />
                    <div className="banner__column-count">незначительный</div>
                </div>
                <div className="banner__temperature">25° C</div>
                <div className="banner__pressure">
                    <div className="banner__pressure-icon"
                        style={{
                        background: `url('/images/icons/weather/wi-thermometer.svg') no-repeat 28% top / 65%`
                    }} />
                    <div className="banner__pressure-count">863</div>
                </div>
            </div>
        </div>
        );
    }
}

export default EventsBanner;