import React from 'react';

const TimeToRead = ({textLength}) => {
    const result = Math.floor(textLength / 250);
    return (
        <div>
            {result} мин. чит.
        </div>
    );
};

export default TimeToRead;