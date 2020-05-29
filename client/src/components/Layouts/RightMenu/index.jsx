import React, { Fragment } from 'react';
import Link from 'next/link';
import axios from 'axios';
import useSWR from 'swr';

const { API_URL } = process.env;

const RightMenu = () => {
    const fetchItems = url => axios.get(url)
        .then(res => res.data.map(item => ({
            id: item.id,
            title: item.title
        }))
    );

    const { data, error } = useSWR(`${API_URL}/books?_limit=10`, fetchItems);

    if (error || !data) console.log('Ошибка получения рандомных книг из бд ' + error);

    return (
        <div className="content">
            <div className="content__wrapper">
                <div className="content__title">
                    содержание
                </div>
                { data && data.map((item, key) => (
                    <Fragment key={key}>
                        <Link href={'/books/[id]'} as={`/books/${item.id}`}>
                            <a className="content__item">
                                <span className="content__item-title">{item.title}</span>
                                <span className="content__item-num">{key + 1}</span>
                            </a>
                        </Link>
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

export default RightMenu;
