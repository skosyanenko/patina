import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.sass';
import PropTypes from 'prop-types';

class Pagination extends Component {
    render() {
        return (
            <div className="container">
                <div className="container__filter">
                    Выводить по:
                    <div className="container__filter-number">
                        <div className="container__filter-type active">7</div>
                        <div className="container__filter-type">14</div>
                        <div className="container__filter-type">21</div>
                    </div>
                </div>
                <div className="container__pagination">
                    <div className="container__pagination-arrow">
                        <svg viewBox="0 0 306 306">
                            <use href="/images/icons/arrows.svg#arrow"/>
                        </svg>
                    </div>
                    <div className="container__pagination-number">
                        <Link to={'/'} className="container__pagination-button">1</Link>
                        <Link to={'/'} className="container__pagination-button">2</Link>
                        <Link to={'/'} className="container__pagination-button">3</Link>
                        <Link to={'/'} className="container__pagination-button">...</Link>
                        <Link to={'/'} className="container__pagination-button">6</Link>
                    </div>
                    <div className="container__pagination-arrow">
                        <svg viewBox="0 0 306 306">
                            <use href="/images/icons/arrows.svg#arrow"/>
                        </svg>
                    </div>
                </div>
            </div>

        )
    }
}

Pagination.propTypes = {};

export default Pagination;
