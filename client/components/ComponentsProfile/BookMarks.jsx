import React, { Component } from 'react';
import Link from 'next/link';
import Author from 'components/Author';

class BookMarks extends Component {
    render() {
        const { textLength, createdAt, firstName, lastName } = this.props;
        return (
            <div className="bookmarks">
                <div className="bookmarks__wrapper">
                    <Author
                        isTimeToRead={true}
                        textLength={textLength}
                        date={createdAt}
                        name={firstName}
                        surname={lastName}
                    />
                    <button className="button-white user-button">Удалить</button>
                </div>
                <div className="bookmarks__text">
                    <Link href={'/books'}>
                        <a className="bookmarks__text-title">Название поста</a>
                    </Link>
                    <span className="published__text-type">Рецензия</span>
                    <h1 className="published__text-name">"Повелитель мух"</h1>
                </div>
                <Link href={'/books'}>
                    <img src="/public/topImage/1.jpg" alt="" className="bookmarks__img"/>
                </Link>
            </div>
        );
    }
}

export default BookMarks;