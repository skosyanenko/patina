import React from 'react'
import {Link} from 'react-router-dom'
import Layout from '../components/Layouts/Layout'
import ReviewAuthor from '../components/ReviewAuthor'
import ReviewText from '../components/ReviewText'

const ReviewPage = () => (
    <Layout>
        <Link to="/books" className="arrow-backwards">
            <img src="/images/icons/arrow.svg" alt="" className="arrow-backwards__img" />
        </Link>
        <div className='content new'>
            <ReviewAuthor/>
            <ReviewText/>
        </div>
    </Layout>
);

export default ReviewPage;
