import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ArrowBackwards from 'components/ArrowBackwards';
import BookInform from 'components/BookInform';
import './index.sass';

class Cover extends Component {

    render() {

        return (
            <div className="cover">

                <Link to="/books">
                    <ArrowBackwards/>
                </Link>

                <div className="cover__wrapper">
                    <div className="cover__wrapper-img">
                        <img src="/images/books/1.png" alt=""/>
                    </div>
                    <div className="cover__wrapper-letBig">У</div>
                    <div className="cover__wrapper-letSmall">Г</div>
                    <div className="cover__wrapper-author">
                        <h3 className="cover__wrapper-name">
                            уильям джеральд голдинг
                        </h3>
                        <span className="cover__wrapper-date">1911-1993</span>
                    </div>
                </div>

                <BookInform/>

            </div>
        );
    }
}

export default Cover;
