import React from 'react';
import Icons from 'components/Icons';
import Socials from 'components/SocialsGroup';
import TimeToRead from '../../../components/TimeToRead';
import './index.sass';

const Article = ({title, description, likes, date, views, textLength}) => {
    return(
        <div className="article">
            <h1 className="article__title">{title}</h1>
            <div className="article__wrapper">
                <div className="article__wrapper-text"
                     dangerouslySetInnerHTML={{__html: `${description}`}}
                />
                <div className="article__wrapper-nav">
                    <div className="article__wrapper-wrap">
                        <TimeToRead textLength={textLength}/>
                        <Icons likes={likes}
                               date={date}
                               views={views}
                        />
                    </div>
                    <Socials/>
                </div>
            </div>
        </div>
    )
};

export default Article;
