import React, { Component } from 'react';
import { withRouter } from 'next/router';
import Auth from 'services/Authorization';
import axios from "axios";

class Socials extends Component {
    state = {
        authorization: false
    };

    saveBookmark = (type, idElem) => {
        const { API_URL } = process.env;

        if ( Auth.token && Auth.token.length > 0) {
            this.setState({authorization: true});

            const id = Auth.userInfo.id;
            const options = Auth.token && {
                headers: { Authorization: `Bearer ${Auth.token}` }
            } ;
            const data = {[type]: [idElem]};

            axios.put(`${API_URL}/users/${id}`, data, options)
                .then(res => {
                    res.status === 200 &&
                    this.setState({success: true});
                })
                .catch(err => {
                    this.setState({
                        error: 'Ошибка при отправке формы, попробуйте позже!' + err
                    });
                });
        } else {
            this.props.toggleModal();
        }
    };

    render() {
        const { authorization } = this.state;
        const { router, idElem, type } = this.props;
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
                <div className="socials__bookmark" onClick={() => {this.saveBookmark(type, idElem)}}>
                    <svg className={`${authorization && 'active'}`}>
                        <use href="/icons/sprite.svg#bookmark"/>
                    </svg>
                </div>
            </div>
        );
    }
}

export default withRouter(Socials);
