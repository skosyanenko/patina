import React from 'react';
import Icons from 'components/Icons';
import Socials from 'components/SocialsGroup';
import TimeToRead from '../../../components/TimeToRead';
import './index.sass';

const Article = ({viewType, title, description, likes, date, views, textLength}) => {
    const view = viewType === 1 || viewType === 2 || viewType === 3;
    return(
        <div className={`article ${view ? 'article__horizontal' : ''}`}>
            {viewType === 0 || viewType === 4 ? <h1 className="article__title">{title}</h1> : ''}
            <div className="article__wrapper">
                <div className={`${view ? 'article__wrapper-horizontal' : 'article__wrapper-text'}`}
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
