import React, { Component } from 'react';
import './index.sass';

class BtnScrollToTop extends Component {
    state = {
        inactive: false
    };

    componentDidMount() {
        const scrollComponent = this;
        document.addEventListener('scroll', () => {
            scrollComponent.showButton();
        });
    };

    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    showButton = () => {
        if (window.pageYOffset > 500) {
            this.setState(prevState => ({
                inactive: !prevState.inactive
            }))
        }
    };

    render() {
        const { inactive } = this.state;

        return (
            <div className={`scroll-top ${inactive ? 'show' : ''}`}
                 onClick={() => {this.scrollToTop()}}
            >
                <div className="scroll-top__icon"/>
            </div>
        );
    }
}

export default BtnScrollToTop;