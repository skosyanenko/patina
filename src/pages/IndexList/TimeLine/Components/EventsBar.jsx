import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Constants} from '../helpers';
import Swiper from 'react-id-swiper';
import TimelineDot from './TimelineDot';

class EventsBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 0,
            maxPosition: Math.min(props.visibleWidth - props.totalWidth, 0),
        };

        this.touch = {
            coors: {
                x: 0,
                y: 0
            },
            isSwiping: true,
            started: false,
            threshold: 3
        }
    }

    componentWillMount() {
        document.body.addEventListener('keydown', this.handleKeydown);
    }

    componentDidMount() {
        const selectedEvent = this.props.events[this.props.index];
        this.slideToPosition(-(selectedEvent.distance - (this.props.visibleWidth / 2)), this.props);
    }

    componentWillUnmount() {
        document.body.removeEventListener('keydown', this.handleKeydown);
    }

    handleKeydown = (event,  props = this.props) => {
        if (props.isKeyboardEnabled) {
            switch (event) {
                case event.keyCode === Constants.LEFT_KEY || event.keyCode === Constants.RIGHT_KEY:
                    return this.updateSlide(Constants.KEYMAP[event.keyCode]);
                case event.keyCode === Constants.UP_KEY:
                    return props.indexClick(Math.min(props.selectedIndex + 1, props.events.length - 1));
                case event.keyCode === Constants.DOWN_KEY:
                    return props.indexClick(Math.max(props.selectedIndex - 1, 0));
            }
        }
    };

    handleTouchStart = (event) => {
        const touchObj = event.touches[0];

        this.touch.coors.x = touchObj.pageX;
        this.touch.coors.y = touchObj.pageY;
        this.touch.isSwiping = false;
        this.touch.started = true;
    };

    handleTouchMove = (event) => {
        if (!this.touch.started) {
            this.handleTouchStart(event);
            return;
        }

        const touchObj = event.touches[0];
        const dx = Math.abs(this.touch.coors.x - touchObj.pageX);
        const dy = Math.abs(this.touch.coors.y - touchObj.pageY);

        const isSwiping = dx > dy && dx > this.touch.threshold;

        if (isSwiping === true || dx > this.touch.threshold || dy > this.touch.threshold) {
            this.touch.isSwiping = isSwiping;
            const dX = this.touch.coors.x - touchObj.pageX;
            this.touch.coors.x = touchObj.pageX;
            this.setState({
                position: this.state.position - (dX)
            });
        }
        if (this.touch.isSwiping !== true) {
            return;
        }
        event.preventDefault();
    };

    handleTouchEnd = () => {
        this.slideToPosition(this.state.position);
        this.touch.coors.x = 0;
        this.touch.coors.y = 0;
        this.touch.isSwiping = false;
        this.touch.started = false;
    };


    componentWillReceiveProps(props) {
        const selectedEvent = props.events[props.index];
        const minVisible = -this.state.position;
        const maxVisible = minVisible + props.visibleWidth;

        if (selectedEvent.distance > (minVisible + 10) && selectedEvent.distance < (maxVisible - 10)) {
            this.slideToPosition(this.state.position, props);
        } else {
            this.slideToPosition(-(selectedEvent.distance - (props.visibleWidth / 2)), props);
        }
    }

    slideToPosition = (position, props = this.props) => {
        const maxPosition = Math.min(props.visibleWidth - props.totalWidth, 0);

        this.setState({
            position: Math.max(Math.min(0, position), maxPosition),
            maxPosition
        });
    };

    updateSlide = (direction, props = this.props) => {
        switch (direction) {
            case direction === Constants.RIGHT:
                return this.slideToPosition((this.state.position - props.visibleWidth) + props.labelWidth, props);
            case direction === Constants.LEFT:
                return this.slideToPosition((this.state.position + props.visibleWidth) - props.labelWidth, props);
        }
    };

    centerEvent = (index, props = this.props) => {
        const event = props.events[index];
        this.slideToPosition(-event.distance);
    };

    render() {
        const {isTouchEnabled, events, index, width, height, totalWidth, labelWidth, barPaddingLeft, barPaddingRight, fillingMotion, styles, indexClick} = this.props;
        const {position} = this.state;

        const touchEvents = isTouchEnabled && {
            onTouchStart: this.handleTouchStart,
            onTouchMove: this.handleTouchMove,
            onTouchEnd: this.handleTouchEnd
        };

        const filledValue = events[index].distance - barPaddingLeft;
        const eventLineWidth = totalWidth - barPaddingLeft - barPaddingRight;

        const params = {
            slidesPerView: 'auto',
            freeMode: true,
            centeredSlides: true,
            initialSlide: 'auto',
            speed: 1000,
            mousewheel: true,
            grabCursor: true
        };

        return (
            <div
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                }}
            >

                <div className="timeline__wrapper">

                                <span className="line"/>
                                <div className="timeline__eventbar">
                                    <Swiper {...params} containerClass="swiper">
                                        {events.map((event, key) => (
                                            <TimelineDot
                                                {...event}
                                                index={key}
                                                key={key}
                                                onClick={indexClick}
                                                selected={index}
                                                styles={styles}
                                                labelWidth={labelWidth}
                                            />
                                        ))}
                                    </Swiper>
                                </div>

                </div>
            </div>
        );
    }
}

EventsBar.propTypes = {
    width:           PropTypes.number.isRequired,
    height:          PropTypes.number.isRequired,
    events:          PropTypes.arrayOf(PropTypes.shape({
        distance:    PropTypes.number.isRequired,
        date:        PropTypes.string.isRequired,
    })).isRequired,
    totalWidth:      PropTypes.number.isRequired,
    visibleWidth:    PropTypes.number.isRequired,
    index:           PropTypes.number,
    styles:          PropTypes.object.isRequired,
    indexClick:      PropTypes.func.isRequired,
    labelWidth:      PropTypes.number.isRequired,
    fillingMotion:   PropTypes.object.isRequired,
    barPaddingRight: PropTypes.number.isRequired,
    barPaddingLeft:  PropTypes.number.isRequired,
};

export default EventsBar;
