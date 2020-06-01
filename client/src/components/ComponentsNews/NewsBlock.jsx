import React from 'react';
import Link from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Icons from 'components/Icons';
import TimeToRead from 'components/TimeToRead';

const NewsBlock = ({ item: {id, cover, likes, views, title, description},  textLength, date, toggleModal }) => (
    <div className="news-block">
        <Link href={'/articles/[id]'} as={`/articles/${id}`}>
            <div className="news-block__img">
                {cover && <LazyLoadImage src={`${cover.url}`} alt=""/>}
            </div>
        </Link>
        <Link href={'/articles/[id]'} as={`/articles/${id}`}>
            <a className="news-block__title">{title}</a>
        </Link>
        <span className="news-block__text"
              dangerouslySetInnerHTML={{__html: `${description}`}}
        />
        <div className="news-block__nav">
            <Icons
                likes={likes}
                idContent={id}
                typeContent={'articles'}
                views={views}
                date={date}
                toggleModal={toggleModal}
                isAllIcons={true}
            />
            <div className="news-block__nav-wrap">
                <TimeToRead textLength={textLength}/>
                <Link href={'/articles/[id]'} as={`/articles/${id}`}>
                    <a className="button button-white">Подробнее</a>
                </Link>
            </div>
        </div>
    </div>
);

export default NewsBlock;
