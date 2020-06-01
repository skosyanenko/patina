import React from 'react';
import Link from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const NewsElem = ({ item: {id, cover, title, description} }) => (
    <div className="news-elem">
        <div className="news-elem__about">
            <Link href={'/articles/[id]'} as={`/articles/${id}`}>
                <a className="news-elem__title">{title}</a>
            </Link>
            <span className="news-elem__text"
                  dangerouslySetInnerHTML={{__html: `${description}`}}
            />
        </div>
        <Link href={'/articles/[id]'} as={`/articles/${id}`}>
            <div className="news-elem__img">
                {cover && <LazyLoadImage src={`${cover.url}`} alt=""/>}
            </div>
        </Link>
    </div>
);

export default NewsElem;
