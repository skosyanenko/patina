import React from 'react';
import {Link} from 'react-router-dom';
import ArrowBackwards from 'components/ArrowBackwards';
import './index.sass';


const Depiction = ({title, description}) => (
    <div className="depiction">
        <div className="depiction__wrapper">
            <Link to="/tops">
                <ArrowBackwards/>
            </Link>
            <h1 className="depiction__wrapper-title">{title}</h1>
        </div>
        <div className="depiction__description"
             dangerouslySetInnerHTML={{__html: `${description}`}}
        />
    </div>
);

export default Depiction;
