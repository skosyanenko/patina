import React from 'react';
import UserInfo from '../UserInfo';
import Writer from '../Writer';
import CommentBlock from 'components/CommentBlock';
import {formatType} from '../../../config/config';
import './index.sass';

const ViewVertical = ({book, title, description, likes, date, id, textLength}) => {
    return (
        <>
            <div className="container-review">
                <Writer
                />
                <div className="container-review__text">
                    <h1 className="container-review__text-title">{title}</h1>
                    <span className="container-review__text-subtitle">{title}</span>
                </div>
            </div>

            <div className="review-wrap">
                {/*{description && Object.keys(description).map(item => (*/}
                {/*    formatType(item, description[item])*/}
                {/*))}*/}
            </div>
            <UserInfo textLength={textLength}
                      likes={likes}
                      date={date}
            />
            <CommentBlock reviewId={id}/>
        </>
    )
};

export default ViewVertical;