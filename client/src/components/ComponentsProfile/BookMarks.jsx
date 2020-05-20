import React, { Component } from 'react';
import Link from 'next/link';
import Auth from 'services/Authorization';
import axios from 'axios';

const { API_URL } = process.env;

class BookMarks extends Component {

    handleDeleteBookmark = (id) => {
        const { updateBookmarks } = this.props;
        const options = Auth.token && {headers: { Authorization: `Bearer ${Auth.token}`}};

        axios.delete(`${API_URL}/bookmarks/${id}`, options)
            .then(res => {
                res.status === 200 &&
                updateBookmarks({ deleteMark: res.data });
            })
            .catch(err => {
                console.log('Ошибка при отправке формы, попробуйте позже!' + err);
            });
    }

    render() {
        const { item: {id, book, bookmarks} } = this.props;
        return (
            <div className="bookmarks">
                {bookmarks.bookImage && <img src={`${bookmarks.bookImage.url}`} alt="" className="bookmarks__img"/>}
                <div className="bookmarks__wrapper">
                    <div className="bookmarks__wrapper-row">
                        <div className="bookmarks__wrapper-column">
                            <Link href={`/books/[id]`} as={`/books/${book}`}>
                                <a className="bookmarks__wrapper-title">{bookmarks.title}</a>
                            </Link>
                            <span className="bookmarks__wrapper-weight">объём: {bookmarks.weight} стр.</span>
                        </div>
                        <button
                            className="button-white user-button"
                            onClick={() => this.handleDeleteBookmark(id)}
                        >
                            Удалить
                        </button>
                    </div>
                    <span className="bookmarks__text">{bookmarks.description}</span>
                </div>
            </div>
        );
    }
}

export default BookMarks;