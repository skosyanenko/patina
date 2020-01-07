import React, {Component} from 'react';
import './index.sass';

class registration extends Component {

    render() {
        return (
            <div className="registration">
                <div className="registration__column">
                    <div className="registration__group">
                        <img src="images/icons/user/user.svg" alt="" className="registration__column-img"/>
                        <input type="text" required/>
                        <span className="registration__group-highlight"/>
                        <span className="registration__group-bar"/>
                        <label>Имя</label>
                    </div>
                    <div className="registration__group">
                        <img src="images/icons/user/email.svg" alt="" className="registration__column-img"/>
                        <input type="text" required/>
                        <span className="registration__group-highlight"/>
                        <span className="registration__group-bar"/>
                        <label>E-mail</label>
                    </div>
                    <div className="registration__group">
                        <img src="images/icons/user/placeholder.svg" alt="" className="registration__column-img"/>
                        <input type="text" required/>
                        <span className="registration__group-highlight"/>
                        <span className="registration__group-bar"/>
                        <label>Город</label>
                    </div>
                    <div className="registration__radio">
                        <span>Пол</span>
                        <div className="registration__radio-radio">
                            <input type="radio" name="option" id="man"/>
                            <label htmlFor="man">Мужской</label>
                        </div>
                        <div className="registration__radio-radio">
                            <input type="radio" name="option" id="woman"/>
                            <label htmlFor="woman">Женский</label>
                        </div>
                    </div>
                    <div className="registration__group">
                        <img src="images/icons/socials/telegram.svg" alt="" className="registration__column-img"/>
                        <input type="text" required/>
                        <span className="registration__group-highlight"/>
                        <span className="registration__group-bar"/>
                        <label>Настроить импорт/ экспорт</label>
                    </div>
                    <div className="registration__group">
                        <img src="images/icons/user/books.svg" alt="" className="registration__column-img"/>
                        <input type="text" required/>
                        <span className="registration__group-highlight"/>
                        <span className="registration__group-bar"/>
                        <label>Укажите любимые книги</label>
                    </div>
                    <div className="registration__group">
                        <img src="images/icons/user/author.svg" alt="" className="registration__column-img"/>
                        <input type="text" required/>
                        <span className="registration__group-highlight"/>
                        <span className="registration__group-bar"/>
                        <label>Укажите любимых писателей</label>
                    </div>
                </div>
                <div className="registration__column">
                    <div className="registration__group">
                        <img src="images/icons/user/user.svg" alt="" className="registration__column-img"/>
                        <input type="text" required/>
                        <span className="registration__group-highlight"/>
                        <span className="registration__group-bar"/>
                        <label>Фамилия</label>
                    </div>
                    <div className="registration__group">
                        <img src="images/icons/user/telephone.svg" alt="" className="registration__column-img"/>
                        <input type="text" required/>
                        <span className="registration__group-highlight"/>
                        <span className="registration__group-bar"/>
                        <label>Мобильный телефон</label>
                    </div>
                    <div className="registration__group">
                        <img src="images/icons/user/password.svg" alt="" className="registration__column-img"/>
                        <input type="text" required/>
                        <span className="registration__group-highlight"/>
                        <span className="registration__group-bar"/>
                        <label>Пароль</label>
                    </div>
                    <label htmlFor="avatar" className="registration__avatar">
                        <input type="file" id="avatar"/>
                        <div className="registration__avatar-img">
                            <img src="images/icons/user/upload.svg" alt=""/>
                        </div>
                        <span>Загрузите ваше фото</span>
                    </label>
                    <div className="registration__group">
                        <img src="images/icons/socials/vk.svg" alt="" className="registration__column-img"/>
                        <input type="text" required/>
                        <span className="registration__group-highlight"/>
                        <span className="registration__group-bar"/>
                        <label>Настроить импорт/ экспорт</label>
                    </div>
                    <div className="registration__group">
                        <img src="images/icons/user/wishlist.svg" alt="" className="registration__column-img"/>
                        <input type="text" required/>
                        <span className="registration__group-highlight"/>
                        <span className="registration__group-bar"/>
                        <label>Укажите любимые жанры</label>
                    </div>
                    <div className="button buttonGreen">Зарегистироваться</div>
                </div>
            </div>
        );
    }
}

registration.propTypes = {};

export default registration;