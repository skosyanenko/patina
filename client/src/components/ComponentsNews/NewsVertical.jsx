import React from 'react';
import Link from 'next/link';
import Icons from 'components/Icons';
import TimeToRead from 'components/TimeToRead';

const NewsVertical = ({ item: {id, cover, title, description, likes, views}, textLength, date, toggleModal }) => (
    <div className="news-vertical">
        <Link href={'/news/[id]'} as={`/news/${id}`}>
            <a className="news-vertical__link">
                <div className="news-vertical__link-img">
                    {cover && <img src={`${cover.url}`} alt=""/>}
                </div>
            </a>
        </Link>
        <div className="news-vertical__description">
            <div className="news-vertical__description-wrap">
                <Link href={'/news/[id]'} as={`/news/${id}`}>
                    <a className="news-vertical__title">{title}</a>
                </Link>
                <span className="news-vertical__text"
                      dangerouslySetInnerHTML={{__html: `${description}`}}
                />
            </div>
            <div className="news-vertical__description-nav">
                <Icons
                    likes={likes}
                    idContent={id}
                    typeContent={'articles'}
                    views={views}
                    date={date}
                    toggleModal={toggleModal}
                />
                <div className="news-vertical__description-wrapper">
                    <TimeToRead textLength={textLength}/>
                    <Link href={'/news/[id]'} as={`/news/${id}`}>
                        <a className="button button-white">Подробнее</a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default NewsVertical;
