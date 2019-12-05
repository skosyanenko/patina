import React, {Component} from 'react';
import './index.sass';

class EventsBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }


    render() {
        return (
        <div className="banner">
            <div className="banner__row">
                <div className="banner__row-time">{this.state.date.toLocaleTimeString()}</div>
                <div className="banner__row-date">Чт {this.state.date.getDate() + '.' + this.state.date.getMonth()}</div>
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