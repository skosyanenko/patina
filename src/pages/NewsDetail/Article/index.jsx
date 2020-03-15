import React from 'react';
import Icons from 'components/Icons';
import Socials from 'components/SocialsGroup';
import './index.sass';

const Article = ({news}) => {
    return(
        <div className="article">
            <h1 className="article__title">{news.title}</h1>
            <div className="article__wrapper">
                <div className="article__wrapper-text"
                     dangerouslySetInnerHTML={{__html: `${news.description}`}}
                />
                <div className="article__wrapper-nav">
                    <Icons likes={news.likes}
                           date={news.date}
                           views={news.views}
                    />
                    <Socials/>
                </div>
            </div>
        </div>
    )
};

export default Article;
