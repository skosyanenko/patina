import React from 'react';
import ProfileMenu from './ProfileMenu';
import Personal from './Personal';
import Interests from './Interests';
import ProfileHome from './ProfileWrap/ProfileHome';
import ProfileFollowing from './ProfileWrap/ProfileFollowing';
import ProfileStatistic from './ProfileWrap/ProfileStatistic';

const Profile = ({match}) => {

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
