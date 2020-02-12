import React, {Component} from 'react';
import anime from 'animejs';
import './index.sass';

class ArrowBackwards extends Component {
    componentDidMount() {
        this.animateArrow();
    }

    animateArrow = () => {
        const animation = anime({
            targets: this.arrow,
            delay: function(el, i) { return i * 100; },
            autoplay: false,
            translateX: 30,
            duration: 1000,
            loop: true,
            easing: 'easeInOutSine',
            direction: 'alternate'
        });
        setTimeout(() => {
            animation.play();
        }, 300);
    };

    render() {
        return (
            <div className="backwards fadeInRight" ref={node => this.arrow = node}/>
        );
    }
}

export default ArrowBackwards;