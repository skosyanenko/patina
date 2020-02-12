import React, {Component} from 'react';
import Publish from "../Publish";

class ProfileFollowing extends Component {
    render() {
        return (
            <div className="page--follow">
                <div className="page--profile-title">Последние публикации:</div>
                <div className="page--profile-wrap">
                    <Publish/>
                    <Publish/>
                    <Publish/>
                    <Publish/>
                </div>
            </div>
        );
    }
}

export default ProfileFollowing;