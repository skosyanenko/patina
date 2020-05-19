import React, { Component } from 'react';
import Publish from 'components/ComponentsProfile/Publish';
import BookMarks from 'components/ComponentsProfile/BookMarks';

class ProfileHome extends Component {
    state = {
        deleteMark: {},
        bookmarks: []
    };

    componentDidMount() {
        const { user, authorization } = this.props;

        if ( authorization) {
            this.setState({
                bookmarks: user.bookmarked
            })
        }
    };

    componentDidUpdate(prevProps, prevState) {
        const { deleteMark, bookmarks } = this.state;

        if (prevState.deleteMark !== deleteMark) {
            this.state.bookmarks.map(item => {
                if (item.id === deleteMark.id) {
                    bookmarks.splice(bookmarks.indexOf(item), 1);
                    this.setState({
                        bookmarks: bookmarks,
                        deleteMark: []
                    })
                }
            })
        }
    };

    updateBookmarks = (newState = {}) => {
        this.setState({...newState})
    };

    render() {
        const { authorization, user, toggleModal } = this.props;

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
                        {user.bookmarked && user.bookmarked.length > 0 &&
                            <>
                                <div className="page--profile-title">Закладки:</div>
                                { user.bookmarked && user.bookmarked.map((item, key) => (
                                    <BookMarks
                                        item={item}
                                        key={key}
                                        updateBookmarks={this.updateBookmarks}
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
}

export default ProfileHome;