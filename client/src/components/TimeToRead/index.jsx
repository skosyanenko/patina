import React from 'react';

const TimeToRead = ({ textLength }) => {
    const result = Math.floor(textLength / 250);

    return (
        <span className="time-to-read">
            { result } мин. чит.
        </span>
    );
};

export default TimeToRead;