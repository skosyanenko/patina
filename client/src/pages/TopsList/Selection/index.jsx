import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.sass';
import data from 'startData/tops';

class Selection extends Component {

    render() {
        return (
            <div className="selection">
                {data && data.tops.map((item, key) => (
                    <Link to="/top" key={key} className="selection__link">
                        {item.title}
                    </Link>
                ))}
            </div>
        )
    }
}

export default Selection;