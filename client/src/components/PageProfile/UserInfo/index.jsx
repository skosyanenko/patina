import React, {Component} from 'react';
import './index.sass';

class UserInfo extends Component {
    render() {
        return (
            <div className="user-info">
                <div className="user-info__column">
                    <div className="user-info__column-container">
                        <div className="user-info__column-books"/>
                        <div className="user-info__column-title">Любимые книги</div>
                    </div>
                    <div className="user-info__column-text">
                        <span>1. Мастер и Маргарита</span>
                        <span>2. Три товарища</span>
                        <span>3.  Повелитель мух</span>
                        <span>4.  Любовь живет три года</span>
                        <span>5. Как закалялась сталь</span>
                    </div>
                </div>
                <div className="user-info__column">
                    <div className="user-info__column-container">
                        <div className="user-info__column-wishlist"/>
                        <div className="user-info__column-title">Любимые жанры</div>
                    </div>
                    <div className="user-info__column-text">
                        <span>1. Мастер и Маргарита</span>
                        <span>2. Три товарища</span>
                        <span>3.  Повелитель мух</span>
                    </div>
                </div>
                <div className="user-info__column">
                    <div className="user-info__column-container">
                        <div className="user-info__column-author"/>
                        <div className="user-info__column-title">Любимые авторы</div>
                    </div>
                    <div className="user-info__column-text">
                        <span>1. Мастер и Маргарита</span>
                        <span>2. Три товарища</span>
                        <span>3.  Повелитель мух</span>
                    </div>
                </div>
            </div>
        );
    }
}

UserInfo.propTypes = {};

export default UserInfo;