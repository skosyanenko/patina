import React, { Component } from 'react';
import { withRouter } from 'next/router';
import Auth from 'services/Authorization';
import axios from 'axios';

const { API_URL } = process.env;

class Socials extends Component {
    state = {
        isSave: false,
        bookmarks: [],
        userId: Auth.userInfo.id
    };

    componentDidUpdate(prevProps, prevState) {
        const userId = Auth.userInfo.id;
        const { bookmarked } = this.props;

        if (Auth.isAuth && prevProps.bookmarked !== bookmarked) {
            this.setState({
                bookmarks: bookmarked,
                isSave: bookmarked.some(item => item.user === userId) || false,
            })
        }
    };

    handleClick = () => {
        const { isSave, bookmarks, userId } = this.state;

        if (!Auth.isAuth) return this.props.toggleModal();

        if (isSave) {
            bookmarks && bookmarks.forEach(item => {
                if (item.user === userId) return this.deleteBookMark(item.id);
            })
        } else {
            return this.saveBookmark();
        }
    };

    saveBookmark = () => {
        const { idContent, titleContent, description, image, weight } = this.props;
        const options = Auth.token && {headers: { Authorization: `Bearer ${Auth.token}`}};
        const data = {
            bookmarks: {title: titleContent, bookImage: image, description: description, weight: weight}
        };

        axios.post(`${API_URL}/books/${idContent}/bookmark`, data, options)
            .then(res => {
                res.status === 200 &&
                  this.setState(state => ({isSave: !state.isSave}));
            })
            .catch(err => {
                console.log('Ошибка при отправке формы, попробуйте позже!' + err);
            });
    };

    deleteBookMark = (id) => {
        const options = Auth.token && {headers: { Authorization: `Bearer ${Auth.token}`}};
        axios.delete(`${API_URL}/bookmarks/${id}`, options)
            .then(res => {
                res.status === 200 &&
                this.setState(state => ({isSave: !state.isSave}));
            })
            .catch(err => {
                console.log('Ошибка при отправке формы, попробуйте позже!' + err);
            });
    };

    render() {
        const { isSave } = this.state;
        const { router } = this.props;
        const { API } = process.env;

        return (
            <div className="socials" itemProp="sharedContent" itemScope itemType="http://schema.org/WebPage">
                <a target="_blank"
                   rel="noopener noreferrer"
                   href={`https://vk.com/share.php?url=${API}${router.asPath}`}
                   itemProp="url"
                >
                    <div className="socials__vk" itemProp="headline" content="vk.com"/>
                </a>
                <a target="_blank"
                   rel="noopener noreferrer"
                   href={`https://t.me/share/url?url=${API}${router.asPath}`}
                   itemProp="url"
                >
                    <div className="socials__tg" itemProp="headline" content="t.me"/>
                </a>
                <div
                    className="socials__bookmark"
                    onClick={() => {this.handleClick()}}
                >
                    <svg className={`${isSave && 'active'}`}>
                        <use href="/icons/sprite.svg#bookmark"/>
                    </svg>
                </div>
            </div>
        );
    }
}

export default withRouter(Socials);
