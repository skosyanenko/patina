import React from 'react';
import ProfileMenu from './Components/ProfileMenu';
import Personal from './Components/Personal';
import Interests from './Components/Interests';
import ProfileHome from './wrapComponents/ProfileHome';
import ProfileFollowing from './wrapComponents/ProfileFollowing';
import ProfileStatistic from './wrapComponents/ProfileStatistic';
import './index.sass';

const Profile = ({ match }) => {

    const switchViews = () => {
        switch(match.params.page) {
            case 'statistic':
                return <ProfileStatistic/>;
            case 'following':
                return <ProfileFollowing/>;
            default:
                return <ProfileHome/>;
        }
    };

    return (
        <>
            <div className="page--container">
                <ProfileMenu/>
                <Personal/>
            </div>
            <Interests/>
            {switchViews()}
        </>
    );
};

export default Profile;
