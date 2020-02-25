import React from 'react';
import './index.sass';

const Rating = () => (
    <div className="rating">
        {[1, 2 ,3, 4, 5].map((star, key) => (
            <>
                <input
                    key={key}
                    id={star}
                    type="radio"
                    name={star}
                    value={star}
                />
                <label htmlFor={star}/>
            </>
        ))}
    </div>
);

export default Rating;