import React from 'react';
import PropTypes from 'prop-types';
import './index.sass';

const Event = ({
   date,
   picture,
   timeStart,
   timeEnd,
   title,
   place
}) => {
    const weekdaysMin = 'вс_пн_вт_ср_чт_пт_сб'.split('_');

    const formatedTimes = {
        date: new Date(date).getDate(),
        day: weekdaysMin[new Date(date).getDay()],
        timeStart: new Date(timeStart).toLocaleTimeString().slice(0, 5),
        timeEnd: new Date(timeEnd).toLocaleTimeString().slice(0, 5),
    };

    return (
        <div className="event">
            <div className="event__date">
                <span className="event__date-digit">{formatedTimes.date}</span>
                <div className="event__text">
                    <span className="event__text-day">{formatedTimes.day}</span>
                    <span className="event__text-time">{formatedTimes.timeStart + '-' + formatedTimes.timeEnd}</span>
                 </div>
                {picture &&
                    <svg className={'event__date-' + picture}>
                        <use href={`/images/icons/sprite.svg#${picture}`}/>
                    </svg>
                }
            </div>
            <div className="event__description">
                <span className="event__description-title">{title}</span>
                <span className="event__description-text">{place}</span>
            </div>
        </div>
    );
};

Event.propTypes = {
  date:        PropTypes.string.isRequired,
  title:       PropTypes.string.isRequired,
  timeStart:       PropTypes.string.isRequired,
  timeEnd:       PropTypes.string.isRequired,
  place: PropTypes.string.isRequired
};

export default Event;
