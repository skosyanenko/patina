import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.sass';

const Block = ({number, title, author, description}) => (
    <div className="block">
        <div className="block__wrapper">
            <div className="block__title">
                <Link to={'/book'}>{title}</Link>
            </div>
            <div className="block__number">
                <Link to={'/book'}>{number}</Link>
            </div>
        </div>
        <span className="block__author">{author}</span>
        <span className="block__description">{description}</span>
    </div>
);

Block.propTypes = {
    number:        PropTypes.string.isRequired,
    title:         PropTypes.string.isRequired,
    author:        PropTypes.string.isRequired,
    description:   PropTypes.string.isRequired
};

export default Block;
