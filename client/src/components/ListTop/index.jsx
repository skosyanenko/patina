import React from 'react'
import './index.sass'
import {Link} from 'react-router-dom'
import data from 'startData/listTops'

const ListTop = () => (
    <div className="listTop">
        {data && data.items.map((item, key) => (
            <Link to={'/top'} key={key} className="listTop__link">
                {item.title}
            </Link>
        ))}
    </div>
);

export default ListTop;
