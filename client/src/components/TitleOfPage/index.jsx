import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextFx from 'services/TextFx';
import { effectForTitle } from 'config/config';

class TitleOfPage extends Component {

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
        const { title, subtitle, classNamePrefix } = this.props;
        return (
            <div className="page__wrapper">
                <div className="page__wrap">
                    <div className="page__wrap-title" ref={node => this.title = node}>
                        { title }
                    </div>
                    <div className={`page__wrap-subtitle ${classNamePrefix}`}  ref={node => this.subtitle = node}>
                        { subtitle }
                    </div>
                </div>
            </div>
        );
    }
}

TitleOfPage.propTypes = {
    title:     PropTypes.string.isRequired,
    subtitle:  PropTypes.string.isRequired
};

export default TitleOfPage;