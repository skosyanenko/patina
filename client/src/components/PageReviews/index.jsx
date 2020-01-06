import React, {Component} from 'react';
import './index.sass';
import {Link} from "react-router-dom";

class ReviewsContainer extends Component {

    render() {
        return (
            <div className="reviewsContainer">
                <div className="reviewsContainer__column">
                    <div className="reviewsContainer__column-title">Исскуство любить</div>
                    <div className="reviewsContainer__column-users">
                        <Link to={'/review'}>А. А. Иванов</Link>
                        <Link to={'/review'}>А. А. Иванов</Link>
                        <Link to={'/review'}>А. А. Иванов</Link>
                    </div>
                    <img
                        className="reviewsContainer__column-img"
                        src="images/coverImage/ArtOfLove.jpg"
                        alt=""
                    />
                </div>
                <div className="reviewsContainer__column">
                    <img
                        className="reviewsContainer__column-image"
                        src="images/coverImage/11minutes.jpg"
                        alt=""
                    />
                </div>
                <div className="reviewsContainer__column">
                    <img
                        className="reviewsContainer__column-img"
                        src="images/coverImage/Galapagos.jpg"
                        alt=""
                    />
                    <div className="reviewsContainer__column-title">11 минут</div>
                    <div className="reviewsContainer__column-users">
                        <Link to={'/review'}>А. А. Иванов</Link>
                        <Link to={'/review'}>А. А. Иванов</Link>
                        <Link to={'/review'}>А. А. Иванов</Link>
                        <Link to={'/review'}>А. А. Иванов</Link>
                    </div>
                </div>
                <div className="reviewsContainer__column">
                    <div className="reviewsContainer__column-title">Галапагосы</div>
                    <div className="reviewsContainer__column-users">
                        <Link to={'/review'}>А. А. Иванов</Link>
                        <Link to={'/review'}>А. А. Иванов</Link>
                    </div>
                    <div className="reviewsContainer__column-title">Джейн Эйр</div>
                    <div className="reviewsContainer__column-users">
                        <Link to={'/review'}>А. А. Иванов</Link>
                        <Link to={'/review'}>А. А. Иванов</Link>
                    </div>
                    <img
                        className="reviewsContainer__column-img"
                        src="images/coverImage/JaneEyre.jpg"
                        alt=""
                    />
                </div>
            </div>
        );
    }
}

ReviewsContainer.propTypes = {};

export default ReviewsContainer;