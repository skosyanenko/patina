import React from "react";
import "./index.sass";
import PropTypes from "prop-types";

const EventsBox = ({date, image, day, time, name, about}) => {
    return (
        <div className="container-events">
            <div className="container-events__top">
                <div className="container-events__top-date">{date}</div>
                <div className="container-events__left">
                    <div className="container-events__left-day">{day}</div>
                    <div className="container-events__left-time">{time}</div>
                </div>
                { image ?
                    <div style={{backgroundImage: 'url('+require(`../../../static/images/events/${image}.svg`)+')'}} className={'container-events__top-' + image}/>
                    : ''}
            </div>
            <div className="container-events__bottom">
                <div className="container-events__bottom-name">{name}</div>
                <div className="container-events__bottom-about">{about}</div>
            </div>
        </div>
    )
};

EventsBox.propTypes = {
  date: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
};

export default EventsBox;
