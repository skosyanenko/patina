import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { formRoutes } from 'config/config';
import './index.sass';

class ControlList extends Component {
    render() {
        return (
            <div className="control">
                <span className="control__title">Добавление новых данных:</span>
                <div className="control__buttons">
                    { Object.values(formRoutes).slice(0,-2).map((item, key) => (
                        <div className="control__wrap" key={key}>
                            <div className={`control__wrap-img control__add-${item.icon}`}/>
                            <span className="control__wrap-title">{item.title}</span>
                            <Link to={`${item.path}`} className="button button-green">Перейти</Link>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ControlList;