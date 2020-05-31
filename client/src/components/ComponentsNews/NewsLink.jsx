import React from 'react';
import Link from 'next/link';

const NewsLink = ({ item: {id, title} }) => (
    <div className="news-link">
        <Link href={'/articles/[id]'} as={`/articles/${id}`}>
            <a className="news-link__title">{title}</a>
        </Link>
        <Link href={'/articles/[id]'} as={`/articles/${id}`}>
            <a className="button button-white">Подробнее</a>
        </Link>
    </div>
);

export default NewsLink;
