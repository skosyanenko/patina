import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

const ViewChart = ({ item: {id, image, title, description} }) => (
    <div className="result-chart"
        itemScope
        itemType="http://schema.org/CreativeWork"
    >
        <Link href={'/books/[id]'} as={`/books/${id}`}>
            <a className="result-chart__img">
                {image && <img src={`${process.env.API_URL}${image.url}`} alt="" itemProp="image"/>}
            </a>
        </Link>
        <div className="result-chart__wrapper">
            <Link href={'/charts/[id]'} as={`/charts/${id}`}>
                <a className="result-chart__wrapper-title" itemProp="name">
                    {title}
                </a>
            </Link>
            <ReactMarkdown
                source={description}
                className="result-chart__wrapper-description"
                itemProp="description"
            />
        </div>
    </div>
);

export default ViewChart;