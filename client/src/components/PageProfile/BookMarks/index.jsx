import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.sass';
import AuthorOfPublish from "../AuthorOfPublish";

class BookMarks extends Component {
    render() {
        return (
            <div className="bookmarks">
                <div className="bookmarks__column">
                    <AuthorOfPublish
                      isTimeToRead={true}
                      isButton={false}
                    />
                    <div className="buttonWhite user-button">Удалить</div>
                </div>
                <div className="bookmarks__text">
                    <Link to={'/'} className="bookmarks__text-title">Название поста</Link>
                    <div className="published__text-type">Рецензия</div>
                    <div className="published__text-name">"Повелитель мух"</div>
                </div>
                <Link to={'/'}>
                    <img src="images/topImage/1.jpg" alt="" className="bookmarks__img"/>
                </Link>
            </div>
        );
    }
}

BookMarks.propTypes = {};

export default BookMarks;