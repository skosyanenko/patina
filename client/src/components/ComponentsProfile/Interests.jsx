import React, { Component } from 'react';

class Interests extends Component {
    state = {
        isActive: true,
    };

    openBlock = () => this.setState(state => ({isActive: !state.isActive}));

    render() {
        const { isActive } = this.state;
        const { item } = this.props;

        return (
            <div className={`interests__wrapper ${isActive ? 'extended' : ''}`}>
                <div className="interests__wrapper-container">
                    <svg className="interests__wrapper-icon">
                        <use href={`/icons/sprite.svg#${item.icon}`}/>
                    </svg>
                    <div className="interests__wrapper-title">{item.title}</div>
                    <div className={`interests__wrapper-arrow ${isActive ?'toggle' : ''}`} onClick={this.openBlock}>
                        <svg>
                            <use href="/icons/sprite.svg#arrow"/>
                        </svg>
                     </div>
                </div>
                <div className={`interests__wrapper-text ${isActive ? 'active' : ''}`}>
                    <ol>
                        { item.text.map((elem, i) => <li key={i}>{elem}</li>)}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Interests;