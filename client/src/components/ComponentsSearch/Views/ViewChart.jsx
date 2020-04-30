import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

const ViewChart = ({ item }) => (
    <div className="result-chart"
        itemScope
        itemType="http://schema.org/CreativeWork"
    >
        <Link href={'/books/[id]'} as={`/books/${item.id}`}>
            <a className="result-chart__img">
                {item.image && <img src={`${process.env.API_URL}${item.image.url}`} alt="" itemProp="image"/>}
            </a>
        </Link>
        <div className="result-chart__wrapper">
            <Link href={'/charts/[id]'} as={`/charts/${item.id}`}>
                <a className="result-chart__wrapper-title" itemProp="name">
                    {item.title}
                </a>
            </Link>
            <ReactMarkdown
                source={item.description}
                className="result-chart__wrapper-description"
                itemProp="description"
            />
        </div>
    </div>
);

export default ViewChart;