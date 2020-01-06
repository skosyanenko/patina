import React from 'react';
import {Link} from 'react-router-dom';
import './index.sass';

const TopTitle = () => {


    return (
        <div className="topTitle">
            <Link to="/tops">
                <div className="arrowBackwards"/>
            </Link>
            <div className="topTitle__title">ТОП 10</div>
        </div>
    )
};

export default TopTitle;
