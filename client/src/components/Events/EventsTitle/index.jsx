import React, {Component} from 'react';
import './index.sass';
import TextFx from 'services/TextFx';
import {effectForTitle, MONTHS} from 'config/config';

class EventsTitle extends Component {
    state = {
        month: ''
    };

    componentDidMount() {
        this.getCurrentMonth();
    }

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
        setTimeout(() => animatedTitle.show(), 300);
    };

    render() {
        const {month} = this.state;
        return (
            <div className="eventsWrap">
                <div className="eventsWrap__title" ref={node => this.title = node}>
                    {month}
                </div>
                <div className="eventsWrap__subtitle">в Ростове-на-Дону</div>
            </div>
        )
    }
}

export default EventsTitle;

