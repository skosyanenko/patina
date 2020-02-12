import React from 'react';
import {Link} from 'react-router-dom';
import ArrowBackwards from 'components/ArrowBackwards';
import Writer from './Writer';
import Title from './Title';
import View_1 from './Views/View_1';
import View_2 from './Views/View_2';

const ReviewPage = () => (
    <>
        <Link to="/reviews">
           <ArrowBackwards/>
        </Link>

        {/*<div className="container-review">*/}
        {/*    <Writer/>*/}

        {/*    <Title/>*/}
        {/*</div>*/}
        {/*<View_1/>*/}

        <div className="view-2">
            <div className="container-review">
                <Writer/>

                <Title/>

                <View_2/>
            </div>
            <View_1/>
        </div>
    </>
);

export default ReviewPage;
