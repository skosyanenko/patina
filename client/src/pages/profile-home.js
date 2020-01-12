import React from 'react';
import ProfileMenu from '../components/PageProfile/ProfileMenu';
import AboutUser from '../components/PageProfile/AboutUser';
import UserInfo from '../components/PageProfile/UserInfo';
import Publish from '../components/PageProfile/Publish';
import BookMarks from '../components/PageProfile/BookMarks';


const ProfileHomePage = () => (
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
            <div className="section__blocks-bookmark">
                <div className="section__blocks-title">Закладки</div>
                <BookMarks/>
                <BookMarks/>
                <BookMarks/>
                <BookMarks/>
            </div>
        </div>
    </>
);

export default ProfileHomePage;
