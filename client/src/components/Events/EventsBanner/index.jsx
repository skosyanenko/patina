import React from "react";
import "./index.sass";

const EventsBanner = () => {
  return (
      <div className="banner">
          <div className="banner__row">
              <div className="banner__row-time">22:00</div>
              <div className="banner__row-date">Чт 30.05</div>
          </div>
          <div className="banner__icons">
              <div className="banner__column">
                  <div className="banner__column-icon"
                  style={{
                      background: `url('/images/icons/weather/wi-day-sunny.svg') no-repeat 28% top / 65%`
                  }} />
                  <div className="banner__column-count">солнечно</div>
              </div>
              <div className="banner__column">
                  <div className="banner__column-icon"
                       style={{
                           background: `url('/images/icons/weather/wi-strong-wind.svg') no-repeat 28% top / 65%`
                       }} />
                  <div className="banner__column-count">слабый</div>
              </div>
              <div className="banner__column">
                  <div className="banner__column-icon"
                       style={{
                           background: `url('/images/icons/weather/wi-windy.svg') no-repeat 28% top / 65%`
                       }} />
                  <div className="banner__column-count">незначительный</div>
              </div>
              <div className="banner__temperature">25° C</div>
              <div className="banner__pressure">
                  <div className="banner__pressure-icon"
                       style={{
                           background: `url('/images/icons/weather/wi-thermometer.svg') no-repeat 28% top / 65%`
                       }} />
                       <div className="banner__pressure-count">863</div>
              </div>
          </div>

      </div>
  )
};

export default EventsBanner;
