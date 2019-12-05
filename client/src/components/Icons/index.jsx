import React from 'react'
import './index.sass'

const Icons = (props) => {
    return (
        <div className="iconsContainer">
            { Object.keys(props).map((item, i) => {
                return (
                    <div className="iconsContainer__box" key={i}>
                        <div className="iconsContainer__counter">{props[item]}</div>
                        <img src={process.env.PUBLIC_URL + '/images/icons/' + item + '.svg'} alt="" className={'iconsContainer__' + item}/>
                    </div>
                )
            })}
        </div>
    )
};

export default Icons;
