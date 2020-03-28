import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import ArrowBackwards from 'components/ArrowBackwards';
import BookInform from 'components/BookInform';
import {letters, returnAuthor, returnDate} from '../../../config/config';
import './index.sass';

class Cover extends Component {

    letterSubstr = (name, index) => {
        const arr = name.split(' ');
        return arr[index].substr(0, 1).toUpperCase();
    };

    letterSwitcher = (name) => {
        const letter = this.letterSubstr(name, 1);
        return letters.find(item => item.letter === letter).id;
    };

    render() {
        const {authors, bookImage, categories} = this.props;

        return (
            <div className="cover">
                <Link to="/books">
                    <ArrowBackwards/>
                </Link>
                <div className="cover__wrapper">
                    <div className="cover__wrapper-img">
                    <img src={`${bookImage}`} alt=""/>
                    </div>
                    <>
                        {authors && authors.length === 1 && authors.map((item, key) => (
                            <Fragment key={key}>
                                <svg className="cover__wrapper-letBig" >
                                    <use href={`/images/icons/sprite-alphabet.svg#${this.letterSwitcher(item.name)}`}/>
                                </svg>
                                <div className="cover__wrapper-letSmall">{this.letterSubstr(item.name, 0)}</div>
                            </Fragment>
                        ))}
                        <div className="cover__wrapper-author">
                            <h3 className="cover__wrapper-name">{returnAuthor(authors)}</h3>
                            <div className="cover__wrapper-date">{returnDate(authors)}</div>
                        </div>
                    </>
                </div>
                <BookInform categories={categories}/>
            </div>
        );
    }
}

export default Cover;
