import React from 'react';
import './index.sass';

const Rating = () => (
    <div className="rating">
        {[1, 2 ,3, 4, 5].map(star => (
            <div key={star} className="rating__item">
                <svg viewBox="0 0 406.125 406.125">
                    <use href="/images/icons/star.svg#star"/>
                </svg>
            </div>
        ))}
    </div>
);

export default Rating;