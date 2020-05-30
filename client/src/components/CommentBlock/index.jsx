import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { returnDatePublish } from 'config/config';
import CommentForm from './component/CommentForm';
import Auth from 'services/Authorization';

const { API_URL } = process.env;

const CommentBlock = ({ idContent, typeContent }) =>{
    const initialState = {
        comments: [],
        addComment: {},
        deleteComment: {}
    };

    const [state, setState] = useState(initialState);

    const { comments, addComment, deleteComment } = state;

    const getComments = url => axios.get(url)
        .then(res => setState({
            ...state,
            comments: res.data.comments
        }));

    const { data } = useSWR(`${API_URL}/${typeContent}/${idContent}`, getComments);

    useEffect(() => {
        setState(state =>({
            ...state,
            comments: [addComment, ...state.comments]
        }))
    }, [addComment]);

    useEffect(() => {
        comments.map(item => {
            if (item.id === deleteComment.id) {
                comments.splice(comments.indexOf(item), 1);
                setState({
                    ...state,
                    comments: comments,
                    deleteComment: []
                })
            }
        })
    }, [deleteComment])

    const handleCommentDelete = id => {
        const options = Auth.token && {
            headers: { Authorization: `Bearer ${Auth.token}` }
        };

        axios.delete(`${API_URL}/comments/${id}`, options)
            .then(res => {
                res.status === 200 &&
                    setState({ ...state, deleteComment: res.data });
            })
            .catch(err => {
                console.log('Ошибка при отправке формы, попробуйте позже!' + err);
            });
    };

    const updateCommentsArray = (newState = {}) => {
        setState({...state, ...newState})
    };

    return(
        <div className="comments-wrapper">
            <div className="comments__title">
                <div className="comments__title-icon"/>
                <span className="comments__title-counter">{comments.length}</span>
            </div>
            {Auth.isAuth &&
                <CommentForm
                    idContent={idContent}
                    typeContent={typeContent}
                    updateCommentsArray={updateCommentsArray}
                />
                || ''
            }
            { comments && comments.length > 0 && comments.map(({ authorInfo, created_at, comment, id }, key) => (
                <div className="comments-block" itemScope itemType="http://schema.org/UserComments" key={key}>
                    <div className="comments-block__wrap">
                        <div className="author">
                            <div className="author__avatar">
                                {authorInfo && <img src={authorInfo.avatar} alt="" className="author__avatar-img"/>}
                            </div>
                            <div className="author__inform">
                                {authorInfo && <span className="author__inform-name" itemProp="author creator">{authorInfo.username}</span>}
                                <span className="author__inform-date" itemProp="datePublished commentTime">{returnDatePublish(created_at)}</span>
                            </div>
                        </div>
                        { Auth.isAuth && authorInfo && Auth.userInfo.id === authorInfo.userId &&
                            <div
                                className="comments-block__wrap-delete"
                                onClick={() => handleCommentDelete(id)}
                            />
                            || null
                        }
                    </div>
                    <div className="comments-block__text" itemProp="commentText">{comment}</div>
                </div>
            ))}
        </div>
    );
}

export default CommentBlock;