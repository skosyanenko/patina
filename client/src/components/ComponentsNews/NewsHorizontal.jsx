import React from 'react';
import Link from 'next/link';
import Icons from 'components/Icons';
import TimeToRead from 'components/TimeToRead';

const NewsHorizontal = ({ id, cover, title, description, likes, views, date, textLength }) => (
    <div className="news-horizontal">
        <div className="news-horizontal__wrapper">
            <Link href={'/news/[id]'} as={`/news/${id}`}>
                <a className="news-horizontal__link">
                    <div className="news-horizontal__link-img">
                        <img src={`${process.env.API_URL}${cover.url}`} alt=""/>
                    </div>
                </a>
            </Link>
        <div className="news-horizontal__wrapper-nav">
            <div className="news-horizontal__wrapper-wrap">
                <Icons likes={likes} views={views} date={date}/>
                <TimeToRead textLength={textLength}/>
            </div>
            <Link href={'/news/[id]'} as={`/news/${id}`}>
                <a className="button button-white">Подробнее</a>
            </Link>
        </div>
        </div>
        <div className="news-horizontal__description">
            <Link href={'/news/[id]'} as={`/news/${id}`}>
                <a className="news-horizontal__title">{title}</a>
            </Link>
            <span className="news-horizontal__text"
                  dangerouslySetInnerHTML={{__html: `${description}`}}
            />
        </div>
    </div>
);

export default NewsHorizontal;
