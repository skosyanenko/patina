import React from 'react';
import './index.sass';

const Rating = () => (
    <div className="rating">
        {[1, 2 ,3, 4, 5].map(star => (
            <div key={star} className="rating__item">
                <svg>
                    <use href="/images/icons/sprite.svg#star"/>
                </svg>
            </div>
        ))}
    </div>
);

export default Rating;