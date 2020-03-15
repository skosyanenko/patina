import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import ArrowBackwards from 'components/ArrowBackwards';
import BookInform from 'components/BookInform';
import {letters} from '../../../config/config';
import './index.sass';

class Cover extends Component {

    letterSubstr = (name, index) => {
        const arr = name.split(' ');
        return arr[index].substr(0, 1).toUpperCase();
    };

    letterSwitcher = (name) => {
        const letter = this.letterSubstr(name, 0);
        return letters.find(item => item.letter === letter).id;
    };

    render() {
        const {author, image, categories} = this.props;

        return (
            <div className="cover">
                <Link to="/books">
                    <ArrowBackwards/>
                </Link>
                <div className="cover__wrapper">
                    <div className="cover__wrapper-img">
                        <img src={`${image}`} alt=""/>
                     </div>
                    {author && author.map((author, key) => (
                        <Fragment key={key}>
                            <svg className="cover__wrapper-letBig">
                                <use href={`images/icons/sprite-alphabet.svg#${this.letterSwitcher(author.name)}`}/>
                            </svg>
                            <div className="cover__wrapper-letSmall">{this.letterSubstr(author.name, 1)}</div>
                            <div className="cover__wrapper-author">
                                <h3 className="cover__wrapper-name">{author.name}</h3>
                                {author.death ?
                                    <span className="cover__wrapper-date">{author.birth}-{author.death}</span>
                                    :
                                    <span className="cover__wrapper-date">{author.birth}-н.в.</span>
                                }
                            </div>
                        </Fragment>
                    ))}
                </div>
                <BookInform categoories={categories}/>
            </div>
        );
    }
}

export default Cover;
