import React, { Component } from 'react';

class TimelineDot extends Component {
    typeSwitcher = type => {
        switch (type) {
            case 'reviews':
                return ['Новая рецензия', 'pencil'];
            case 'books':
                return ['Новая книга', 'books'];
            case 'charts':
                return ['Новая подборка', 'wishlist'];
            case 'articles':
                return ['Новость', 'author'];
            default:
                return '';
        }
    };

    render() {
        const { item, index, isActive, handleClick } = this.props;
        const classNames = isActive === index;

        return (
            <div className="event-dot">
                <div className="event-dot__wrapper">
                    <div className={`${!classNames && 'invisible'} event-dot__icon`}>
                        <svg>
                            <use href={`/icons/sprite.svg#${this.typeSwitcher(item.type)[1]}`}/>
                        </svg>
                    </div>
                    <div className="event-dot__item">
                        <div className={`${!classNames && 'invisible'} event-dot__item-after`}/>
                        <div className={`${classNames && 'anim'} event-dot__item-dot`} onClick={handleClick}/>
                    </div>
                    <span className={`${!classNames && 'invisible'} event-dot__date`}>{item.date}</span>
                </div>
                <div className={`${!classNames && 'invisible'} event-dot__description`}>
                    <span className="event-dot__description-text">{this.typeSwitcher(item.type)[0]}</span>
                    <span className="event-dot__description-text">Название: «{item.title}»</span>
                </div>
            </div>
        );
    }
}

export default TimelineDot;
