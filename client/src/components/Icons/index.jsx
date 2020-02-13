import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.sass';

class Icons extends Component {
    state = {
        isLiked: false
    };

    static propTypes = {
        like: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        clock: PropTypes.number.isRequired
    };

    static defaultProps = {
        like: 0,
        views: 0,
        clock: 0
    };

    activate = e => {
        const self = e.target;
        const activatedClass = 'activated';

        if (!self.classList.contains(activatedClass) && self.classList.contains('icons__like')) {
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
                        <div className="icons__counter">{this.props[item]}</div>
                        <div className={`icons__${item} ${isLiked && 'active'}`}
                             onClick={this.activate}
                        />
                    </div>
                ))}
            </div>
        );
    }
}

export default Icons;
