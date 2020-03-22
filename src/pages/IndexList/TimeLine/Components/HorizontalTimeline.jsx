import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import dimensions from 'react-dimensions';
import EventsBar from './EventsBar';
import {cummulativeSeperation, Constants} from '../helpers';

const defaultGetLabel = date => (new Date(date)).toDateString().substring(4);

class HorizontalTimeline extends Component {
    render() {
        const props = this.props;

        if (!props.containerWidth) return false;

        const dates = props.values.map(value => new Date(value.date));

        const distances = cummulativeSeperation(
            dates,
            props.labelWidth,
            props.minEventPadding,
            props.maxEventPadding,
            props.linePadding,
        );

        const events = distances.map((distance, index) => ({
            ...props.values[index],
            distance,
            label: props.getLabel(props.values[index].date, index),
            date: props.values[index].date,
        }));

        const visibleWidth = props.containerWidth - 80;

        const totalWidth = Math.max(
            events[events.length - 1].distance + props.linePadding,
            visibleWidth
        );

        let barPaddingRight = 0;
        let barPaddingLeft = 0;
        if (!props.isOpenEnding) {
            barPaddingRight = totalWidth - events[events.length - 1].distance;
        }
        if (!props.isOpenBeginning) {
            barPaddingLeft = events[0].distance;
        }

        const {containerWidth, containerHeight, index, styles, indexClick, labelWidth, fillingMotion} = this.props;
        return (
            <EventsBar
                width={containerWidth}
                height={containerHeight}
                events={events}
                totalWidth={totalWidth}
                visibleWidth={visibleWidth}
                index={index}
                styles={styles}
                indexClick={indexClick}
                labelWidth={labelWidth}
                fillingMotion={fillingMotion}
                barPaddingRight={barPaddingRight}
                barPaddingLeft={barPaddingLeft}
            />
        );
    };
}

HorizontalTimeline.propTypes = {
    index:             PropTypes.number,
    values:            PropTypes.array.isRequired,
    indexClick:        PropTypes.func,
    getLabel:          PropTypes.func,
    minEventPadding:   PropTypes.number,
    maxEventPadding:   PropTypes.number,
    linePadding:       PropTypes.number,
    labelWidth:        PropTypes.number,
    styles:            PropTypes.object,
    fillingMotion:     PropTypes.object,
    slidingMotion:     PropTypes.object,
    isOpenEnding:      PropTypes.bool,
    isOpenBeginning:   PropTypes.bool,
    isKeyboardEnabled: PropTypes.bool,
};

HorizontalTimeline.defaultProps = {
    getLabel: defaultGetLabel,
    minEventPadding: Constants.MIN_EVENT_PADDING,
    maxEventPadding: Constants.MAX_EVENT_PADDING,
    linePadding: Constants.TIMELINE_PADDING,
    labelWidth: Constants.DATE_WIDTH,
    styles: {
        outline: '#dfdfdf',
        background: '#f8f8f8',
        foreground: '#264d4b'
    },
    fillingMotion: {
        stiffness: 150,
        damping: 25
    },
    slidingMotion: {
        stiffness: 150,
        damping: 25
    },
    isOpenEnding: true,
    isOpenBeginning: true,
    isTouchEnabled: true,
    isKeyboardEnabled: true,
};

export default Radium(dimensions({elementResize: true})(HorizontalTimeline));
