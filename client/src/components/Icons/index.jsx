import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Auth from 'services/Authorization';
import axios from 'axios';

const { API_URL } = process.env;

class Icons extends Component {
    state = {
        isLiked: this.props.likes && this.props.likes.some(like => like.user === Auth.userInfo.id) || false,
        likes: this.props.likes || [],
        views: this.props.views || 0,
        date: this.props.date || ''
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.views !== this.props.views) this.setState({views: this.props.views || 0})
    };

    handleClick = () => {
        const { toggleModal } = this.props;
        const { isLiked, likes } = this.state;

        const userId = Auth.userInfo.id;

        if (!Auth.isAuth) return toggleModal(true);

        if (isLiked) {
            likes && likes.forEach(item => {
                if (item.user === userId) return this.deleteLike(item.id)
            });
        } else {
            this.addLike();
        }
    };

    addLike = () => {
        const { idContent, typeContent } = this.props;
        const options = Auth.token && {
            headers: { Authorization: `Bearer ${Auth.token}` }
        };

        axios.post(`${API_URL}/${typeContent}/${idContent}/like`, {}, options)
            .then(res => {
                if (res.status === 200) {
                    const like = {
                        id: res.data.id,
                        user: Auth.userInfo.id
                    };
                    this.setState(state => ({
                        isLiked: !state.isLiked,
                        likes: [...state.likes, like]
                    }));
                }
            })
            .catch(err => console.log('Ошибка при отправке формы, попробуйте позже!' + err));
    };

    deleteLike = (idLike) => {
        const options = Auth.token && {
            headers: { Authorization: `Bearer ${Auth.token}` }
        };
        axios.delete(`${API_URL}/likes/${idLike}`, options)
            .then(res => {
                res.status === 200 &&
                this.setState(state => ({
                    isLiked: !state.isLiked,
                    likes: state.likes.filter(like => like.id !== idLike)
                }));
            })
            .catch(err => {
                console.log('Ошибка при отправке формы, попробуйте позже!' + err);
            });
    }

    render() {
        const { isLiked, likes, views, date } = this.state;
        const { isAllIcons } = this.props;

        if (!isAllIcons) {
            return (
                <div className="like-review" itemScope itemType="http://schema.org/Rating">
                    <span className="like-review__counter" itemProp="reviewRating">{likes.length || 0 }</span>
                    <div className={`like-review__icon ${isLiked && 'active'}`}
                         onClick={this.handleClick}
                    />
                </div>
            )
        } else {
            return (
                <div className="icons">
                    <div className="icons__wrapper" itemScope itemType="http://schema.org/Rating">
                        <div className="icons__counter" itemProp="reviewRating">{likes.length || 0}</div>
                        <div className={`icons__likes ${isLiked && 'active'}`}
                             onClick={this.handleClick}
                        />
                    </div>
                    <div className="icons__wrapper">
                        <div className="icons__counter" itemProp="datePublished dateModified" content={date}>
                            {date}
                        </div>
                        <div className="icons__date"/>
                    </div>
                    <div className="icons__wrapper">
                        <div className="icons__counter">{views}</div>
                        <div className="icons__views"/>
                    </div>
                </div>
            );
        }
    }
}

Icons.propTypes = {
    isAllIcons: PropTypes.bool.isRequired
};

export default Icons;
