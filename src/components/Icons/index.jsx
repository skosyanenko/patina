import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {CSSTransition} from 'react-transition-group';
import './index.sass';

class Icons extends Component {
    state = {
        isLiked: false,
        likes: this.props.likes,
        views: this.props.views,
        date: this.props.date
    };


    static defaultProps = {
        likes: 0,
        views: 0,
        date: 0
    };

    activate = e => {
        const self = e.target;
        const activatedClass = 'activated';
        const like = this.state.likes;
        this.setState({
            likes: like + 1
        });

        if (!self.classList.contains(activatedClass) && self.classList.contains('icons__likes')) {
            self.classList.add(activatedClass);

            setTimeout(() =>  {
                self.classList.remove(activatedClass);
                this.setState(prevState => ({isLiked: !prevState.isLiked}))
            }, 1000)
        }
    };

    render() {
        const {isLiked} = this.state;
        return (
            <div className="icons">
                {Object.keys(this.props).map((item, key) => (
                    <div className="icons__wrapper" key={key}>
                        <div className="icons__counter">{this.state[item]}</div>
                        <div className={`icons__${item} ${isLiked && 'active'}`}
                             onClick={this.activate}
                        />
                    </div>
                ))}
            </div>
        );
    }
}

Icons.propTypes = {
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    date:  PropTypes.number.isRequired
};
export default Icons;
