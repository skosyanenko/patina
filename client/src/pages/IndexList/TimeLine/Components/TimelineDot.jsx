import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const dots = {
    base: {
        transition: 'background-color 0.3s, border-color 0.3s',
        ':hover': {}
    },
    future: (styles) => ({
        backgroundColor: styles.background,
        border: `1px solid ${styles.outline}`,
    }),
    past: (styles) => ({
        backgroundColor: styles.background,
        border: `1px solid ${styles.foreground}`,
    }),
    present: (styles) => ({
        backgroundColor: styles.foreground,
        border: `1px solid ${styles.foreground}`,
    }),
};

class TimelineDot extends Component {
    state = {
        isActive: false
    };

    typeSwitcher = type => {
        switch (type) {
            case 'review':
                return 'Новая рецензия';
            case 'book':
                return 'Новая книга';
            case 'top':
                return 'Новая подборка';
            case 'news':
                return 'Новость'
        }
    };

    showDescription = () => {
        this.setState(prevState => ({
            isActive: !prevState.isActive
        }))
    };

    __getDotStyles = (dotType, key) => {
        const hoverStyle = {
            backgroundColor: this.props.styles.foreground,
            border: `1px solid ${this.props.styles.foreground}`,
        };

        return [
            dots.base,
            dots[dotType](this.props.styles),
            Radium.getState(this.state, key, ':hover') ||
            Radium.getState(this.state, 'dot-dot', ':hover') ? hoverStyle : undefined,
        ]
    };

    render() {
        const {type, author, date, title, onClick, index, selected, distance, labelWidth} = this.props;
        const {isActive} = this.state;

        let dotType = 'future';

        if (index < selected) {
            dotType = 'past';
        } else if (index === selected) {
            dotType = 'present';
        }

        return (
            <div
                className={`${dotType} event-dot`}
                onClick={() => onClick(index)}
                style={[{
                    left: distance - labelWidth / 2,
                    width: labelWidth,
                    ':hover': {},
                }]}
            >
                <div className="event-dot__wrapper">
                    <div className={`${!isActive && 'invisible'} event-dot__icon`}>
                        <img src={`/images/icons/timeline/${type}.svg`} alt=""/>
                    </div>
                    <div className="event-dot__item" onClick={this.showDescription}>
                        <div className={`${!isActive && 'invisible'} event-dot__item-after`}/>
                        <div key='dot-dot'
                             className={`${isActive && 'anim'} event-dot__item-dot`}
                             style={this.__getDotStyles(dotType, date)}
                        />
                    </div>
                    <span className={`${!isActive && 'invisible'} event-dot__date`}>{date}</span>
                </div>
                <div className={`${!isActive && 'invisible'} event-dot__description`}>
                    <span className="event-dot__description-text">{this.typeSwitcher(type)}</span>
                    <span className="event-dot__description-text">Название: «{title}»</span>
                    <span className="event-dot__description-text">Автор: {author}</span>
                </div>
            </div>
        );
    }
}

TimelineDot.propTypes = {
    type:               PropTypes.string.isRequired,
    date:               PropTypes.string.isRequired,
    title:              PropTypes.string.isRequired,
    author:             PropTypes.string.isRequired,
    selected:           PropTypes.number.isRequired,
    index:              PropTypes.number.isRequired,
    onClick:            PropTypes.func.isRequired,
    label:              PropTypes.string.isRequired,
    labelWidth:         PropTypes.number.isRequired,
    distanceFromOrigin: PropTypes.number.isRequired,
    styles:             PropTypes.object.isRequired
};

export default Radium(TimelineDot);
