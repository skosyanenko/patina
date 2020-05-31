import React from 'react';
import Link from 'next/link';
import { counterLetters } from 'config/config';
import Icons from 'components/Icons';
import TimeToRead from 'components/TimeToRead';

const NewsHorizontal = ({ item: {id, cover, title, description, likes, views}, date, toggleModal }) => (
    <div className="news-horizontal">
        <div className="news-horizontal__wrapper">
            <Link href={'/articles/[id]'} as={`/articles/${id}`}>
                <a className="news-horizontal__link">
                    <div className="news-horizontal__link-img">
                        {cover && <img src={`${cover.url}`} alt=""/>}
                    </div>
                </a>
            </Link>
        <div className="news-horizontal__wrapper-nav">
            <Icons
                likes={likes}
                idContent={id}
                typeContent={'articles'}
                views={views}
                date={date}
                toggleModal={toggleModal}
                isAllIcons={true}
            />
            <div className="news-horizontal__wrapper-wrap">
                {description && <TimeToRead textLength={counterLetters(description)}/>}
                <Link href={'/articles/[id]'} as={`/articles/${id}`}>
                    <a className="button button-white">Подробнее</a>
                </Link>
            </div>
        </div>
        </div>
        <div className="news-horizontal__description">
            <Link href={'/articles/[id]'} as={`/articles/${id}`}>
                <a className="news-horizontal__title">{title}</a>
            </Link>
            <span className="news-horizontal__text"
                  dangerouslySetInnerHTML={{__html: `${description}`}}
            />
        </div>
    </div>
);

export default NewsHorizontal;
