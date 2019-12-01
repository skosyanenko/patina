import React from "react"
import {Link} from 'react-router-dom';
import data from 'startData/rightMenu';

const RightMenu = () => (
    <div className="rightmenu">
        <div className="rightmenu__content">
            <div className="rightmenu__title">
                содержание
            </div>
            {data && data.items.map((item, key) => (
                <Link to={item.link} className="rightmenu__book" key={item.id}>
                  <span className="rightmenu__book-title">{item.title}</span>
                  <span className="rightmenu__book-num">{key + 1}</span>
                </Link>
            ))}
        </div>
    </div>
);

export default RightMenu;
