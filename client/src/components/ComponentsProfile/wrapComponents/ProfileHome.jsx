import React, { useState, useEffect } from 'react';
import Publish from 'components/ComponentsProfile/Publish';
import BookMarks from 'components/ComponentsProfile/BookMarks';

const ProfileHome = ({ authorization, toggleModal, user }) => {
    const initialState = {
        deleteMark: {},
        bookmarks: []
    };

    const [state, setState] = useState(initialState);

    const { deleteMark, bookmarks } = state;

    useEffect(() => {
        setState({
            ...state,
            bookmarks: user.bookmarked
        })
    }, [user]);

    useEffect(() => {
        bookmarks.map(item => {
            setState({
                bookmarks: bookmarks.splice(bookmarks.indexOf(item), 1),
                deleteMark: []
            })
        })
    }, [deleteMark])

    const updateBookmarks = (newState = {}) => {
        setState({...state, ...newState})
    };

    return (
        <div className="page--profile">
            {user.reviews && user.reviews.length > 0 &&
                <div className={authorization ? 'page--profile-block' : 'page--profile-public'}>
                    <div className="page--profile-title">Последние публикации:</div>
                    <div className="page--profile-wrap">
                        { user.reviews && user.reviews.map((item, key) => (
                            <Publish
                                item={item}
                                user={user}
                                key={key}
                                toggleModal={toggleModal}
                            />
                        ))}
                    </div>
                </div>
                ||
                <div className="page--profile-title">Публикаций нет.</div>
            }
            { authorization ?
                <div className="page--profile-block">
                    {bookmarks && bookmarks.length > 0 &&
                    <>
                        <div className="page--profile-title">Закладки:</div>
                        { bookmarks && bookmarks.map((item, key) => (
                            <BookMarks
                                item={item}
                                key={key}
                                updateBookmarks={updateBookmarks}
                            />
                        ))}
                    </>
                    ||
                    <div className="page--profile-block">
                        <div className="page--profile-title">Сохраненных в закладки книг нет.</div>
                    </div>
                    }
                </div>
                : ''
            }
        </div>
    );
}

export default ProfileHome;