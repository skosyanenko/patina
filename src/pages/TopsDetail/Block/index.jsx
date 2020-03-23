import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {returnAuthor} from '../../../config/config';
import './index.sass';

const Block = ({id, title, authors, shortDescription, number}) => (
    <div className="block">
        <div className="block__wrapper">
            <div className="block__title">
                <Link to={`/books/${id}`}>{title}</Link>
            </div>
            <div className="block__number">
                <Link to={`/books/${id}`}>{number + 1}</Link>
            </div>
        </div>
        <span className="block__author">{returnAuthor(authors)}</span>
        <span className="block__description">{shortDescription}</span>
    </div>
);

Block.propTypes = {
    number:        PropTypes.string.isRequired,
    title:         PropTypes.string.isRequired,
    author:        PropTypes.string.isRequired,
    description:   PropTypes.string.isRequired
};

export default Block;
