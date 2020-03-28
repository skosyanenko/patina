import React from 'react';
import Typed from 'react-typed';
import {returnAuthor, returnDate, returnImage} from '../../../config/config';
import './index.sass';

const Writer = ({authors, quote}) => {
    return (
        <div className="writer">
            <div className="writer__wrapper">
                <div className="writer__wrapper-author">
                    <h3 className="writer__wrapper-name">{returnAuthor(authors)}</h3>
                    <span className="writer__wrapper-date">{returnDate(authors)}</span>
                </div>
                <Typed className="writer__wrapper-citation"
                       strings = {[`${quote}`]}
                       typeSpeed = {50}
                       backSpeed = {20}
                       startDelay = {1500}
                       showCursor = {false}
                       backDelay = {3000}
                       loop = {true}
                />
            </div>
            <div className="writer__picture">
                  <img src={returnImage(authors)} alt="" className="writer__picture-img"/>
                <div className="writer__picture-quote">
                    <div className="writer__picture-quoteImg"/>
                </div>
                <div className="writer__picture-pinkCircle"/>
                <div className="writer__picture-bigCircle"/>
                <div className="writer__picture-smallCircle"/>
                <div className="writer__picture-quote">
                    <div className="writer__picture-quoteImg"/>
                </div>
            </div>
        </div>
    )
};

export default Writer;
