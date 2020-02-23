import React, {Component} from 'react';
import TextFx from 'services/TextFx';
import {effectForTitle, MONTHS} from 'config/config';
import './index.sass';

class Title extends Component {
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
        setTimeout(() => {
            animatedTitle.show(effectForTitle, () => this.subtitle && this.subtitle.classList.add('active'));
        }, 300);
    };

    render() {
        const {month} = this.state;
        return (
            <div className="events-wrap">
                <span className="events-wrap__title" ref={node => this.title = node}>
                    {month}
                </span>
                <span className="events-wrap__subtitle" ref={node => this.subtitle = node}>в Ростове-на-Дону</span>
            </div>
        )
    }
}

export default Title;

