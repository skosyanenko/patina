import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.sass';

class Icons extends Component {
    state = {
        isLiked: false,
        likes: null,
        views: null,
        date: ''
    };

    static getDerivedStateFromProps(nextProps) {
        if (nextProps.date) {
            return {
                likes: nextProps.likes,
                views: nextProps.views,
                date: nextProps.date
            }
        }
    };

    activate = e => {
        const self = e.target;
        const activatedClass = 'activated';
        const like = this.state.likes;
        this.setState({
            likes: like + 1
        });

        if (!self.classList.contains(activatedClass) && self.classList.contains('icons__likes')){
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
                {['likes', 'date', 'views'].map((item, key) => (
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
    date:  PropTypes.string.isRequired
};
export default Icons;
