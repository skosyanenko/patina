import React, { Component } from 'react';

class Interests extends Component {
    state = {
        isActive: true,
        userLikes: [
            {title: 'Любимые книги', icon: 'books', text: ['Мастер и Маргарита', 'Три товарища', 'Повелитель мух']},
            {title: 'Любимые жанры', icon: 'wishlist', text: ['Мастер и Маргарита', 'Три товарища', 'Повелитель мух']},
            {title: 'Любимые авторы', icon: 'author', text: ['Мастер и Маргарита', 'Три товарища', 'Повелитель мух']}
        ]
    };

    openBlock = () => this.setState(state => ({isActive: !state.isActive}));

    render() {
        const { userLikes, isActive } = this.state;

        return (
            <div className="interests">
                { userLikes.map((item, key) => (
                    <div className={`interests__wrapper ${isActive ? 'extended' : ''}`} key={key}>
                        <div className="interests__wrapper-container">
                            <svg className="interests__wrapper-icon">
                                <use href={`/images/icons/sprite.svg#${item.icon}`}/>
                            </svg>
                            <div className="interests__wrapper-title">{item.title}</div>
                            <div className={`interests__wrapper-arrow ${isActive ?'toggle' : ''}`} onClick={this.openBlock}>
                                <svg>
                                    <use href="/images/icons/sprite.svg#arrow"/>
                                </svg>
                             </div>
                        </div>
                        <div className={`interests__wrapper-text ${isActive ? 'active' : ''}`}>
                            <ol>
                                { item.text.map((elem, i) => <li key={i}>{elem}</li>)}
                            </ol>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Interests;