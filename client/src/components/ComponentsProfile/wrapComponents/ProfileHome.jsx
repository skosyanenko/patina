import React, { Component } from 'react';
import Publish from 'components/ComponentsProfile/Publish';
import BookMarks from 'components/ComponentsProfile/BookMarks';
import Auth from 'services/Authorization';

class ProfileHome extends Component {
    state = {
        isEntered: false,
        deleteMark: {},
        bookmarks: []
    };

    componentDidMount() {
        const { user } = this.props;

        if ( Auth.token && Auth.token.length > 0) {
            this.setState({
                isEntered: true,
                bookmarks: user.bookmarked
            })
        } else {
            this.setState({isEntered: false})
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
        const { isEntered } = this.state;
        const { user, toggleModal } = this.props;

        return (
            <div className="page--profile">
                {user.reviews && user.reviews.length > 0 &&
                    <div className={isEntered ? 'page--profile-block' : 'page--profile-public'}>
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
                { isEntered ?
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