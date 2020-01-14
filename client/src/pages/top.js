import React from 'react';
import Socials from '../components/SocialsGroup';
import TopBox from '../components/PageTop/TopBox';
import '../static/sass/include/_buttons.sass';
import TopTitle from '../components/PageTop/TopTitle';
import data from '../startData/listTop';


const TopPage = () => (
    <>
        <TopTitle/>
        <div className="content">
            <div className="top-grid">
                {data && data.items.map(item =>(
                    <TopBox number={item.id}
                            title={item.title}
                            author={item.author}
                            text={item.text}
                    />
                ))}
            </div>
        </div>
        <div className="icons">
            <div className="icons__socials">
                <Socials/>
            </div>
        </div>
    </>
);

export default TopPage;
