import React, { Component } from 'react';
import Publish from '../Components/Publish';
import BookMarks from '../Components/BookMarks';

class ProfileHome extends Component {
    render() {
        return (
            <div className="page--profile">
                <div className="page--profile-block">
                    <div className="page--profile-title">Последние публикации:</div>
                    <Publish/>
                    <Publish/>
                </div>
                <div className="page--profile-block">
                    <div className="page--profile-title">Закладки:</div>
                    <BookMarks/>
                    <BookMarks/>
                    <BookMarks/>
                    <BookMarks/>
                </div>
            </div>
        );
    }
}

export default ProfileHome;