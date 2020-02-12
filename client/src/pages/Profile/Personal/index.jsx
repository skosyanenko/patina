import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.sass';

class Personal extends Component {
    state = {
        contacts: [
            {title: 'E-mail', classNamePrefix: 'email', contact: 'kosyanenko89@mail.ru'},
            {title: 'Телефон', classNamePrefix: 'phone', contact: '+7 (988) 530 88 13'},
            {title: 'Адрес', classNamePrefix: 'city', contact: 'Ростов-на-Дону'}
        ],
    };

    render() {
        const {contacts} = this.state;

        return (
            <div className="wrap-personal">
                <div className="personal">
                    <div className="personal__avatar">
                        <img src="" alt="" className="personal__avatar-img"/>
                        <span className="personal__avatar-name">ТМ</span>
                    </div>
                    <div className="personal__wrapper">
                        <span className="personal__wrapper-name">Тётя Мотя</span>

                        <div className="personal__wrapper-socials">
                            <Link to={'/'}>
                                <div className="socials__vk"/>
                            </Link>
                            <Link to={'/'}>
                                <div className="socials__tg"/>
                            </Link>
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
                    {contacts.map((item, key) => (
                        <div key={key} className="personal__contacts-wrap">
                            <div className={`personal__contacts-${item.classNamePrefix}`}/>
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