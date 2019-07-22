import React from "react";
import "./index.sass";

const Icons = () => {
  return (
      <div className="icons-container">
          <div className="icons-container__box">
              <div className="icons-container__counter">1234</div>
              <img src={require('./../../static/images/icons/like.svg')} alt="" className="icons-container__like"/>
          </div>
          <div className="icons-container__box">
              <div className="icons-container__counter">1245</div>
              <img src={require('./../../static/images/icons/eye.svg')} alt="" className="icons-container__eye"/>
          </div>
          <div className="icons-container__box">
              <div className="icons-container__counter">12.09.19</div>
              <img src={require('./../../static/images/icons/clock.svg')} alt="" className="icons-container__clock"/>
          </div>
      </div>
  )
};

export default Icons;
