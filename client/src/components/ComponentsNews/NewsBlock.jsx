import React from 'react';
import Link from 'next/link';
import Icons from 'components/Icons';
import TimeToRead from 'components/TimeToRead';

const NewsBlock = ({ id, cover, title, description, likes, views, date, textLength }) => (
    <div className="news-block">
        <Link href={'/news/[id]'} as={`/news/${id}`}>
            <div className="news-block__img">
                <img src={`${process.env.API_URL}${cover.url}`} alt=""/>
            </div>
        </Link>
        <Link href={'/news/[id]'} as={`/news/${id}`}>
            <a className="news-block__title">{title}</a>
        </Link>
        <span className="news-block__text"
              dangerouslySetInnerHTML={{__html: `${description}`}}
        />
        <div className="news-block__nav">
            <div className="news-block__nav-wrap">
                <Icons likes={likes} views={views} date={date}/>
                <TimeToRead textLength={textLength}/>
            </div>
            <Link href={'/news/[id]'} as={`/news/${id}`}>
                <a className="button button-white">Подробнее</a>
            </Link>
        </div>
    </div>
);

export default NewsBlock;
