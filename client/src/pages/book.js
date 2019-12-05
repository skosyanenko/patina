import React from 'react'
import {Link} from 'react-router-dom'
import Layout from '../components/Layouts/Layout'
import BookText from '../components/BookText'
import BookImg from '../components/BookImg'

const BookPage = () => (
    <Layout>
        <Link to="/books" className="arrow-backwards">
            <img src="/images/icons/arrow.svg" alt="" className="arrow-backwards__img"/>
        </Link>
        <div className='content new'>
            <BookImg/>
            <BookText/>
        </div>
    </Layout>
);

export default BookPage;
