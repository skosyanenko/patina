import React from 'react';
import './index.sass';

const InputSearch = props => (
    <div  className={`quest ${props.classNamePrefix}`}>
        <input type="text" className="quest__wrapper"/>
        <div className="quest__image"/>
    </div>
);

export default InputSearch;