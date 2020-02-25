import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Container extends Component {
    state = {
        isMobile: false,
        isActive: true
    };

    openBlock = () => this.setState(state => ({isActive: !state.isActive}));

    render() {
        const {title, icon, text} = this.props;
        const {isActive} = this.state;
        return (
            <div className={`interests__wrapper ${isActive ? 'extended' : ''}`}>
                <div className="interests__wrapper-container">
                    <svg className="interests__wrapper-icon">
                        <use href={`/images/icons/sprite.svg#${icon}`}/>
                    </svg>
                    <div className="interests__wrapper-title">{title}</div>
                    <div className={`interests__wrapper-arrow ${isActive ?'toggle' : ''}`} onClick={this.openBlock}>
                        <svg>
                            <use href="/images/icons/sprite.svg#arrow"/>
                        </svg>
                    </div>
                </div>
                <div className={`interests__wrapper-text ${isActive && 'active' || ''}`}>
                    <ol>
                        {text.map((elem, i) => <li key={i}>{elem}</li>)}
                    </ol>
                </div>
            </div>
        );
    }
}

Container.propTypes = {
    icon:   PropTypes.string.isRequired,
    title:  PropTypes.string.isRequired,
    text:   PropTypes.array.isRequired
};

export default Container;