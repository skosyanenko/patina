import React from 'react';
import {Motion, spring} from 'react-motion';
import PropTypes from 'prop-types';

const EventLine = ({left, width, fillingMotion, backgroundColor}) => (
    <Motion style={{
            tWidth: spring(width, fillingMotion),
            tLeft: spring(left, fillingMotion),
        }}>{({tWidth, tLeft}) =>
            <span
                aria-hidden='true'
                className='timeline__eventline'
                style={{
                    left: `${tLeft}px`,
                    width: `${tWidth}px`,
                    backgroundColor
                }}
            />
        }
    </Motion>
);

EventLine.propTypes = {
    left:            PropTypes.number,
    width:           PropTypes.number,
    fillingMotion:   PropTypes.shape({
        stiffness:   PropTypes.number,
        damping:     PropTypes.number,
    }),
    backgroundColor: PropTypes.string,
};

export default EventLine;
