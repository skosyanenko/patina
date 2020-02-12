import React from 'react';
import Socials from 'components/SocialsGroup';
import Block from './Block';
import Depiction from './Depiction';
import data from 'startData/listTop';


const TopPage = () => (
    <>
        <Depiction/>
        <div className="container">
            <div className="top-grid">
                {data && data.items.map(item =>(
                    <Block number={item.id}
                            title={item.title}
                            author={item.author}
                            description={item.text}
                    />
                ))}
            </div>
        </div>
        <div className="icons-wrap">
            <div className="icons-wrap__socials">
                <Socials/>
            </div>
        </div>
    </>
);

export default TopPage;
