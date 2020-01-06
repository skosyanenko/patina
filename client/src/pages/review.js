import React from 'react';
import {Link} from 'react-router-dom';
import ReviewAuthor from '../components/PageReview/ReviewAuthor';
import ReviewText from '../components/PageReview/ReviewText';

const ReviewPage = () => (
    <>
        <Link to="/reviews">
            <img src="/images/icons/arrow.svg" alt=""  className="arrowBackwards"/>
        </Link>
        <div className="content">
            <ReviewAuthor/>
            <ReviewText/>
        </div>
    </>
);

export default ReviewPage;
