import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.sass';

class Reviews extends Component {

    render() {
        return (
            <div className="reviews">
                <div className="reviews__wrapper">
                    <div className="reviews__text order-2">
                        <h1 className="reviews__text-title">Исскуство любить</h1>
                        <div className="reviews__text-users">
                            <Link to={'/review'}>А. А. Иванов</Link>
                            <Link to={'/review'}>А. А. Иванов</Link>
                            <Link to={'/review'}>А. А. Иванов</Link>
                        </div>
                    </div>
                    <img className="reviews__wrapper-img order-1" src="images/coverImage/ArtOfLove.jpg" alt=""/>
                </div>
                <div className="reviews__wrapper">
                    <img className="reviews__wrapper-image order-3" src="images/coverImage/11minutes.jpg" alt=""/>
                </div>
                <div className="reviews__wrapper">
                    <img className="reviews__wrapper-img order-5" src="images/coverImage/Galapagos.jpg" alt="" />
                    <div className="reviews__text order-4">
                        <h1 className="reviews__text-title">11 минут</h1>
                        <div className="reviews__text-users">
                            <Link to={'/review'}>А. А. Иванов</Link>
                            <Link to={'/review'}>А. А. Иванов</Link>
                            <Link to={'/review'}>А. А. Иванов</Link>
                            <Link to={'/review'}>А. А. Иванов</Link>
                        </div>
                    </div>
                </div>
                <div className="reviews__wrapper">
                    <div className="reviews__text order-6">
                        <h1 className="reviews__text-title">Галапагосы</h1>
                        <div className="reviews__text-users">
                            <Link to={'/review'}>А. А. Иванов</Link>
                            <Link to={'/review'}>А. А. Иванов</Link>
                        </div>
                    </div>
                    <div className="reviews__text order-8">
                        <h1 className="reviews__text-title">Джейн Эйр</h1>
                        <div className="reviews__text-users">
                            <Link to={'/review'}>А. А. Иванов</Link>
                            <Link to={'/review'}>А. А. Иванов</Link>
                        </div>
                    </div>
                    <img className="reviews__wrapper-img order-7" src="images/coverImage/JaneEyre.jpg" alt=""/>
                </div>
            </div>
        );
    }
}

export default Reviews;