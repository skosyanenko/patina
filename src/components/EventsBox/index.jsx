import React from "react";
import "./index.sass";
import PropTypes from "prop-types";

const EventsBox = ({date, image, day, time, name, about}) => {
    return (
        <div className="container">
            <div className="container__top">
                <div className="container__top-date">{date}</div>
                { image ?
                    <div style={{backgroundImage: 'url('+require(`../../static/images/events/${image}.svg`)+')'}} className={'container__top-' + image}/>
                    : ''}
                <div className="container__left">
                    <div className="container__left-day">{day}</div>
                    <div className="container__left-time">{time}</div>
                </div>
            </div>
            <div className="container__bottom">
                <div className="container__bottom-name">{name}</div>
                <div className="container__bottom-about">{about}</div>
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
