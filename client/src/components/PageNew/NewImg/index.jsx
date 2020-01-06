import React from 'react';
import './index.sass';
import {Link} from "react-router-dom";

const NewImg = () => {
    return (
        <div className="newImg">
            <Link to="/news" className="arrowBackwardsLink">
                <div className="arrowBackwards"/>
            </Link>
            <div className="newImg__image">
                <div className="newImg__image-img">
                    <img src="/images/news/1.png" alt=""/>
                </div>
                <div className="newImg__image-figure"/>
                <div className="newImg__image-figure"/>
            </div>
        </div>

    )
};

export default NewImg;
