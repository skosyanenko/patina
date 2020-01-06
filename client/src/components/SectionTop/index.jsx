import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Sorting from '../Sorting';
import TextFx from 'services/TextFx';
import {effectForTitle} from 'config/config';

class SectionTop extends Component {

    componentDidMount() {
        this.animateTitle();
    }

    animateTitle = () => {
        const animatedTitle = new TextFx(this.title, effectForTitle);
        animatedTitle.hide();
        setTimeout(() => {
            animatedTitle.show(effectForTitle, () => this.subtitle && this.subtitle.classList.add('active'));
        }, 300);
    };

    render() {
        const {title, subtitle, isSorting, classNamePrefix} = this.props;
        return (
            <div className="section__top">
                <div className="section__title-wrap">
                    <div className="section__title" ref={node => this.title = node}>
                        {title}
                    </div>
                    <div className={`section__subtitle ${classNamePrefix}`}  ref={node => this.subtitle = node}>
                        {subtitle}
                    </div>
                </div>
                { isSorting ? <Sorting/> : '' }
            </div>
        );
    }
}

SectionTop.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    isSorting: PropTypes.bool.isRequired
};

export default SectionTop;