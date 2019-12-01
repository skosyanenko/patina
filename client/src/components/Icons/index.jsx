import React from "react";
import "./index.sass";

const Icons = (props) => {
    return (
        <div className="icons-container">
            { Object.keys(props).map((item, i) => {
                return (
                     <div className="icons-container__box" key={i}>
                        <div className="icons-container__counter">{props[item]}</div>
                        <img src={''} alt="" className={'icons-container__' + item}/>
                     </div>
                )
            })}
        </div>
    )
};

export default Icons;
