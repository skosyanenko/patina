import React from 'react';
import PropTypes from 'prop-types';
import TimelineDot from './TimelineDot';

const EventsBar = ({events, selectedIndex, styles, handleDateClick, labelWidth}) => (
    <div className="timeline__eventbar">
        {events.map((event, key) => (
            <TimelineDot
                {...event}
                index={key}
                key={key}
                onClick={handleDateClick}
                selected={selectedIndex}
                styles={styles}
                labelWidth={labelWidth}
            />
        ))}
    </div>
);

EventsBar.propTypes = {
    events:          PropTypes.arrayOf(PropTypes.shape({
        distance:    PropTypes.number.isRequired,
    })).isRequired,
    selectedIndex:   PropTypes.number,
    handleDateClick: PropTypes.func,
    labelWidth:      PropTypes.number.isRequired,
    styles:          PropTypes.object,
};

export default EventsBar;
