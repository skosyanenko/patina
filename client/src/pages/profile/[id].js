import React from 'react';
import { withRouter } from "next/router";
import ProfileMenu from 'components/ComponentsProfile/ProfileMenu';
import Personal from 'components/ComponentsProfile/Personal';
import Interests from 'components/ComponentsProfile/Interests';
import ProfileHome from 'components/ComponentsProfile/wrapComponents/ProfileHome';
import ProfileFollowing from 'components/ComponentsProfile/wrapComponents/ProfileFollowing';
import ProfileStatistic from 'components/ComponentsProfile/wrapComponents/ProfileStatistic';
import MyHead from 'components/MyHead';

const Profile = ({ router }) => {

    const switchViews = () => {
        switch(router.query.page) {
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
            <MyHead
                title={'Профиль - Patina'}
                description={'Личный аккаунт пользователя литературного журнала Patina'}
                link={`/profile/${id}`}
                robots={'none'}
            />
            <>
                <div className="page--container">
                    <ProfileMenu/>
                    <Personal/>
                </div>
                <Interests/>
                {switchViews()}
            </>
        </>
    );
};

export default withRouter(Profile);
