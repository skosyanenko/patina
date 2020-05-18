import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Author from 'components/Author';
import Auth from 'services/Authorization';
import axios from 'axios';

const { API_URL } = process.env;

const CommentForm = ({ idContent, typeContent, updateCommentsArray }) => {
    const { handleSubmit, register, reset } = useForm();

    const ref = useRef();

    const initialState = {
        isActive: false,
        user: []
    };

    const [state, setState] = useState(initialState);

    const { isActive, user } = state;

    useEffect(() => {
        getUserInfo();
    }, []);

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    });

    const handleClick = () => {
        setState({
            ...state,
            isActive: true
        })
    };

    const handleOutsideClick = e => {
        if (ref.current && !ref.current.contains(e.target)) {
            setState({
                ...state,
                isActive: false
            })
        }
    };

    const handleCommentSubmit = content => {
        const options = Auth.token && {
            headers: { Authorization: `Bearer ${Auth.token}` }
        };

        axios.post(`${API_URL}/${typeContent}/${idContent}/comment`, content, options)
            .then(res => {
                res.status === 200 &&
                setState({...state, isActive: false,});
                updateCommentsArray({ addComment: res.data });
                reset({ comment: '' });
            })
            .catch(err => {
                console.log('Ошибка при отправке формы, попробуйте позже!' + err);
            });
    };

    const getUserInfo = () => {
        const id = Auth.userInfo.id;

        axios.get(`${API_URL}/users/${id}`)
            .then(res => {
                res.data &&
                setState({
                    ...state,
                    user: res.data
                })
            })
            .catch(err => {
                console.log('Ошибка получения элементов из бд' + err)
            });
    };

    return (
        <form
            className="comments-form"
            onSubmit={handleSubmit(handleCommentSubmit)}
            ref={ref}
        >
            <div
                className="comments-form__wrap"
                onClick={handleClick}
            >
                <Author
                    isTimeToRead={false}
                    user={user}
                />
                <input
                    name={'comment'}
                    type={'text'}
                    ref={register}
                    placeholder="Напишите комментарий..."
                    className="comments-form__wrap-text"
                />
            </div>
            <button
                type="submit"
                className={`button button-white ${isActive ? 'show' : ''}`}
            >
                Опубликовать
            </button>
        </form>
    );
}

export default CommentForm;