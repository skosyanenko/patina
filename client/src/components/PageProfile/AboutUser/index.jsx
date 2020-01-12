import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.sass';

class AboutUser extends Component {
    render() {
        return (
            <div className="about-user">
                <div className="about-user__avatar">
                    <img src="" alt="" className="about-user__avatar-img"/>
                    <span className="about-user__avatar-name">ТМ</span>
                </div>
                <div className="about-user__line">
                    <div className="about-user__line-name">Тётя Мотя</div>
                    <div className="buttonWhite user-button">Редактировать</div>
                    <div className="about-user__line-socials">
                        <Link to={'/'}>
                            <div className="socials__vk"/>
                        </Link>
                        <Link to={'/'}>
                            <div className="socials__tg"/>
                        </Link>
                    </div>
                </div>
                <div className="about-user__status">Субъективные заметки профессионального любителя</div>
                <div className="about-user__follow">
                    <span className="about-user__follow-following">Подписки • 100</span>
                    <span className="about-user__follow-followers">Подписки • 100</span>
                </div>
                <div className="about-user__contacts">
                    <div className="about-user__contacts-container">
                        <div className="about-user__contacts-email"/>
                        <div className="about-user__contacts-text">
                            <span>E-mail</span>
                            <div>kosyanenko89@mail.ru</div>
                        </div>
                    </div>
                    <div className="about-user__contacts-container">
                        <div className="about-user__contacts-phone"/>
                        <div className="about-user__contacts-text">
                            <span>Телефон</span>
                            <div>+7 (988) 530 88 13</div>
                        </div>
                    </div>
                    <div className="about-user__contacts-container">
                        <div className="about-user__contacts-city"/>
                        <div className="about-user__contacts-text">
                            <span>Адресс</span>
                            <div>Ростов-на-Дону</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AboutUser.propTypes = {};

export default AboutUser;