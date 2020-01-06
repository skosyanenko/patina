import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.sass';
import data from 'startData/tops';

class ListTop extends Component {

    render() {
        return (
            <div className="listTop">
                {data && data.tops.map((item, key) => (
                    <Link to="/top" key={key} className="listTop__link">
                        {item.title}
                    </Link>
                ))}
            </div>
        )
    }
}

export default ListTop;
