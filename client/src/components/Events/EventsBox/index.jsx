import React from 'react'
import './index.sass'
import PropTypes from 'prop-types'

const EventsBox = ({date, image, day, time, name, about}) => {
    return (
        <div className="containerEvents">
            <div className="containerEvents__top">
                <div className="containerEvents__top-date">{date}</div>
                <div className="containerEvents__left">
                    <div className="containerEvents__left-day">{day}</div>
                    <div className="containerEvents__left-time">{time}</div>
                </div>
                {image && <div style={{backgroundImage: 'url(/images/events/' + image + '.svg)'}} className={'containerEvents__top-' + image}/>}
            </div>
            <div className="containerEvents__bottom">
                <div className="containerEvents__bottom-name">{name}</div>
                <div className="containerEvents__bottom-about">{about}</div>
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
