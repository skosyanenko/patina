import React from 'react';
import {Link} from 'react-router-dom';
import './index.sass';

const Selection = ({tops}) => (
    <div className="selection">
        {tops && tops.map((top, key) => (
            <Link to={`/tops/${top.id}`} key={key} className="selection__link">
                {top.title}
            </Link>
        ))}
    </div>
);

export default Selection;
