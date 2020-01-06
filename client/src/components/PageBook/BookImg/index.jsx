import React, {Component} from 'react';
import './index.sass';
import {Link} from "react-router-dom";
import BookInform from "../../BookInform";

class BookImg extends Component {

    render() {
        return (
            <div className="bookImg">
                <Link to="/books">
                    <div className="arrowBackwards"/>
                </Link>
                <div className="bookImg__image">
                    <div className="bookImg__image-container">
                        <img src="/images/books/1.png" alt=""/>
                    </div>
                    <div className="bookImg__image-letBig">У</div>
                    <div className="bookImg__image-letSmall">Г</div>
                    <div className="bookImg__image-author">
                        <div className="bookImg__image-name">
                            уильям джеральд голдинг
                        </div>
                        <div className="bookImg__image-date">1911-1993</div>
                    </div>
                </div>
                <BookInform/>
            </div>
        );
    }
}

BookImg.propTypes = {};

export default BookImg;
