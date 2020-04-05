import React, { Component } from 'react';
import { returnNameLetters } from 'config/config';

class Personal extends Component {
    state = {
        contacts: [
            { title: 'E-mail', icon: 'email', contact: 'kosyanenko89@mail.ru' },
            { title: 'Телефон', icon: 'telephone', contact: '+7 (988) 530 88 13' },
            { title: 'Адрес', icon: 'placeholder', contact: 'Ростов-на-Дону' }
        ],
    };

    render() {
        const { contacts } = this.state;
        const { firstName, lastName, avatar, telegram, vk, email, phone, city } = this.props;

        return (
            <div className="wrap-personal">
                <div className="personal">
                    <div className="personal__avatar">
                        { avatar ?
                            <img src={avatar} alt="" className="personal__avatar-img"/>
                            :
                            <span className="personal__avatar-name">{returnNameLetters('Mark', 'Jacobs')}</span>
                        }
                    </div>
                    <div className="personal__wrapper">
                        <span className="personal__wrapper-name">Тётя Мотя</span>

                        <div className="personal__wrapper-socials">
                            <a href="/">
                                <svg className="socials__vk">
                                    <use href="/images/icons/sprite.svg#vkontakte"/>
                                </svg>
                            </a>
                            <a href="/">
                                <svg className="socials__tg">
                                    <use href="/images/icons/sprite.svg#telegram"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <span className="personal__status">Субъективные заметки профессионального любителя</span>
                    <div className="personal__follow">
                        <span className="personal__follow-following">Подписки • 100</span>
                        <span className="personal__follow-followers">Подписки • 100</span>
                        <button className="button-white user-button">Редактировать</button>
                    </div>
                </div>
                <div className="personal__contacts">
                    { contacts.map((item, key) => (
                        <div key={key} className="personal__contacts-wrap">
                            <svg className="personal__contacts-icon">
                                <use href={`/images/icons/sprite.svg#${item.icon}`}/>
                            </svg>
                            <div className="personal__contacts-text">
                                <span>{item.title}</span>
                                <div>{item.contact}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Personal;