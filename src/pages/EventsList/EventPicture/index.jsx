import React from 'react';

const EventPicture = ({picture}) => {
    return (
        <div className="event event-picture">
            <div className="event__date">
                {picture &&
                    <svg className={'event__date-' + picture}>
                        <use href={`/images/icons/sprite.svg#${picture}`}/>
                    </svg>
                }
            </div>
        </div>
    )
};

export default EventPicture;