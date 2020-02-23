import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Author from '../Author';
import './index.sass';

class BookMarks extends Component {
    render() {
        return (
            <div className="bookmarks">
                <div className="bookmarks__wrapper">
                    <Author
                        isTimeToRead={true}
                        isButton={false}
                        buttonText={''}
                    />
                    <button className="button-white user-button">Удалить</button>
                </div>
                <div className="bookmarks__text">
                    <Link to={'/book'} className="bookmarks__text-title">Название поста</Link>
                    <span className="published__text-type">Рецензия</span>
                    <h1 className="published__text-name">"Повелитель мух"</h1>
                </div>
                <Link to={'/book'}>
                    <img src="/images/topImage/1.jpg" alt="" className="bookmarks__img"/>
                </Link>
            </div>
        );
    }
}

export default BookMarks;