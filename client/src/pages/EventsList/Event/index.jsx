import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.sass';

class Event extends Component {
    render() {
        const {date, picture, day, time, title, description} = this.props;
        return (
            <div className="event">
                <div className="event__date">
                    <span className="event__date-digit">{date}</span>
                    <div className="event__text">
                        <span className="event__text-day">{day}</span>
                        <span className="event__text-time">{time}</span>
                     </div>
                    {picture &&
                        <img src={'/images/events/' + picture + '.svg'} alt=""
                             className={'event__date-' + picture}
                        />
                    }
                </div>
                <div className="event__description">
                    <span className="event__description-title">{title}</span>
                    <span className="event__description-text">{description}</span>
                </div>
            </div>
        );
    }
}

Event.propTypes = {
  date:        PropTypes.string.isRequired,
  day:         PropTypes.string.isRequired,
  time:        PropTypes.string.isRequired,
  title:       PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Event;
