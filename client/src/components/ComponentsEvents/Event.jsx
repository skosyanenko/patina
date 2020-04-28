import React from 'react';
import PropTypes from 'prop-types';

const Event = ({ date, picture, start, end, title, place }) => {
    const weekdaysMin = 'вс_пн_вт_ср_чт_пт_сб'.split('_');

    const formatedTimes = {
        date: new Date(date).getDate(),
        day: weekdaysMin[new Date(date).getDay()],
        start: start.toString().slice(0, 5),
        end: end.toString().slice(0, 5)
    };

    return (
        <div className="event"
             itemType="http://schema.org/Event"
             itemScope
        >
            <div className="event__date">
                <span className="event__date-digit" itemProp="startDate" content={date}>{formatedTimes.date}</span>
                <div className="event__text">
                    <span className="event__text-day">{formatedTimes.day}</span>
                    <span className="event__text-time">
                        {formatedTimes.start + '-' + formatedTimes.end}
                    </span>
                 </div>
                { picture &&
                    <svg className={'event__date-' + picture}>
                        <use href={`/images/icons/sprite.svg#${picture}`}/>
                    </svg>
                }
            </div>
            <div className="event__description">
                <span className="event__description-title" itemProp="name description">{title}</span>
                <div className="event__description-text"
                      itemType="http://schema.org/Place"
                      itemScope
                      itemProp="location"
                >
                    <span itemProp="name address">{place}</span>
                </div>
            </div>
        </div>
    );
};

Event.propTypes = {
  date:          PropTypes.string,
  title:         PropTypes.string,
  start:         PropTypes.string,
  end:           PropTypes.string,
  place:         PropTypes.string
};

export default Event;
