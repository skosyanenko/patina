import React from 'react';
import Link from 'next/link';

const NewsElem = ({ item: {id, cover, title, description} }) => (
    <div className="news-elem">
        <div className="news-elem__about">
            <Link href={'/news/[id]'} as={`/news/${id}`}>
                <a className="news-elem__title">{title}</a>
            </Link>
            <span className="news-elem__text"
                  dangerouslySetInnerHTML={{__html: `${description}`}}
            />
        </div>
        <Link href={'/news/[id]'} as={`/news/${id}`}>
            <div className="news-elem__img">
                {cover && <img src={`${process.env.API_URL}${cover.url}`} alt=""/>}
            </div>
        </Link>
    </div>
);

export default NewsElem;
