import React from 'react';
import ProfileMenu from '../components/PageProfile/ProfileMenu';
import AboutUser from '../components/PageProfile/AboutUser';
import UserInfo from '../components/PageProfile/UserInfo';
import Publish from '../components/PageProfile/Publish';


const ProfileFollowingPage = () => (
    <>
        <div className="section__profile">
            <ProfileMenu/>
            <AboutUser/>
        </div>
        <UserInfo/>
        <div className="section__blocks">
            <div className="section__blocks-publish">
                <div className="section__blocks-title">Последние публикации</div>
                <Publish/>
                <Publish/>
            </div>
            <div className="section__blocks-publish">
                <Publish/>
                <Publish/>
            </div>
        </div>
    </>
);

export default ProfileFollowingPage;
