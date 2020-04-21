import React from 'react';
import ProfileMenu from 'components/ComponentsProfile/ProfileMenu';
import Personal from 'components/ComponentsProfile/Personal';
import Interests from 'components/ComponentsProfile/Interests';
import ProfileHome from 'components/ComponentsProfile/wrapComponents/ProfileHome';
import ProfileFollowing from 'components/ComponentsProfile/wrapComponents/ProfileFollowing';
import ProfileStatistic from 'components/ComponentsProfile/wrapComponents/ProfileStatistic';

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
