import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Auth from 'services/Authorization';
import axios from 'axios';

const { API_URL } = process.env;

const Icons = ({ date, views, idContent, typeContent, toggleModal, isAllIcons }) => {
    const initialState = {
        isLiked:  false,
        likes:  [],
        view:  0,
        dates: date
    };

    const [state, setState] = useState(initialState);

    const { isLiked, likes, view, dates } = state;

    useEffect(() => {
        getDynamicContent();
    }, [idContent])

    useEffect(() => {
        setState({
            ...state,
            view: views,
            dates: date
        })
    }, [views, date]);

    const getDynamicContent = () => {
        axios.get(`${API_URL}/${typeContent}/${idContent}`)
            .then(res => {
                if ( res.status === 200 ) {
                    setState({
                        ...state,
                        isLiked: res.data.likes.some(like => like.user === Auth.userInfo.id) || false,
                        likes: res.data.likes,
                        view: res.data.views
                    })
                }
            })
    };

    const handleClick = () => {
        const userId = Auth.userInfo.id;

        if (!Auth.isAuth) return toggleModal(true);

        if (isLiked) {
            likes && likes.forEach(item => {
                if (item.user === userId) return deleteLike(item.id)
            });
        } else {
            addLike();
        }
    };

    const addLike = () => {
        const options = Auth.token && {
            headers: { Authorization: `Bearer ${Auth.token}` }};

        axios.post(`${API_URL}/${typeContent}/${idContent}/like`, {}, options)
            .then(res => {
                if (res.status === 200) {
                    const like = {
                        id: res.data.id,
                        user: Auth.userInfo.id
                    };
                    setState(state => ({
                        ...state,
                        isLiked: !state.isLiked,
                        likes: [...state.likes, like]
                    }));
                }
            })
            .catch(err => console.log('Ошибка при отправке формы, попробуйте позже!' + err));
    };

    const deleteLike = (idLike) => {
        const options = Auth.token && {
            headers: { Authorization: `Bearer ${Auth.token}` }};

        axios.delete(`${API_URL}/likes/${idLike}`, options)
            .then(res => {
                res.status === 200 &&
                    setState(state => ({
                        ...state,
                        isLiked: !state.isLiked,
                        likes: state.likes.filter(like => like.id !== idLike)
                }));
            })
            .catch(err => {
                console.log('Ошибка при отправке формы, попробуйте позже!' + err);
            });
    }

    if (!isAllIcons) {
        return (
            <div className="like-review" itemScope itemType="http://schema.org/Rating">
                <span className="like-review__counter" itemProp="reviewRating">{likes.length || 0 }</span>
                <div className={`like-review__icon ${isLiked && 'active'}`}
                    onClick={handleClick}
                />
            </div>
        )
    } else {
        return (
            <div className="icons">
                <div className="icons__wrapper" itemScope itemType="http://schema.org/Rating">
                    <div className="icons__counter" itemProp="reviewRating">{likes.length || 0}</div>
                    <div className={`icons__likes ${isLiked && 'active'}`}
                        onClick={handleClick}
                    />
                </div>
                <div className="icons__wrapper">
                    <div className="icons__counter" itemProp="datePublished dateModified" content={date}>
                        {dates}
                    </div>
                    <div className="icons__date"/>
                </div>
                <div className="icons__wrapper">
                    <div className="icons__counter">{view}</div>
                    <div className="icons__views"/>
                </div>
            </div>
        );
    }
}

Icons.propTypes = {
    isAllIcons: PropTypes.bool.isRequired
};

export default Icons;
