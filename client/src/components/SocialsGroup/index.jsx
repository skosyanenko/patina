import React, { useState, useEffect } from 'react';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import Auth from 'services/Authorization';
import axios from 'axios';

const { API_URL } = process.env;

const Socials = ({ router, isBookmarks, bookmarked, toggleModal, bookId, titleContent, description, image, weight }) => {
    const userId = Auth.userInfo.id;

    const [state, setState] = useState(false);

    useEffect(() => {
        if (Auth.isAuth) {
            setState(bookmarked && bookmarked.some(item => item.user === userId) || false)
        }
    }, [bookmarked]);

    const handleClick = () => {
        if (!Auth.isAuth) return toggleModal(true);

        if (state) {
            bookmarked && bookmarked.forEach(item => {
                if (item.user === userId) return deleteBookMark(item.id);
            })
        } else {
            return saveBookmark();
        }
    };

    const saveBookmark = () => {
        const options = Auth.token && {headers: { Authorization: `Bearer ${Auth.token}`}};
        const data = {
            bookmarks: {title: titleContent, bookImage: image, description: description, weight: weight}
        };

        axios.post(`${API_URL}/books/${bookId}/bookmark`, data, options)
            .then(res => {
                res.status === 200 &&
                setState(true);
            })
    };

    const deleteBookMark = (id) => {
        const options = Auth.token && {headers: { Authorization: `Bearer ${Auth.token}`}};

        axios.delete(`${API_URL}/bookmarks/${id}`, options)
            .then(res => {
                res.status === 200 &&
                setState(false);
            })
    };

    return (
        <div className="socials" itemProp="sharedContent" itemScope itemType="http://schema.org/WebPage">
            <a target="_blank"
                rel="noopener noreferrer"
                href={`https://vk.com/share.php?url=https://the-patina.ru${router.asPath}`}
                itemProp="url"
            >
                <div className="socials__vk" itemProp="headline" content="vk.com"/>
            </a>
            <a target="_blank"
                rel="noopener noreferrer"
                href={`https://t.me/share/url?url=https://the-patina.ru${router.asPath}`}
                itemProp="url"
            >
                <div className="socials__tg" itemProp="headline" content="t.me"/>
            </a>
            {isBookmarks &&
                <div
                    className="socials__bookmark"
                    onClick={handleClick}
                >
                    <svg className={`${state && 'active'}`}>
                        <use href="/icons/sprite.svg#bookmark"/>
                    </svg>
                    <div className="socials__bookmark-before">
                        {state ? 'Добавлено' : 'В закладки'}
                    </div>
                </div>
                || ''
            }
        </div>
    );
}

Socials.propTypes = {
    isBookmarks: PropTypes.bool.isRequired
};

export default withRouter(Socials);
