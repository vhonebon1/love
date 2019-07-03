import React from 'react';
import Sunny from '../images/sunny.svg';
import Cloudy from '../images/partly-sunny.svg';

const Weather = ({ temp, weatherDesc }) =>
  <React.Fragment>
    <img className="weather__icon" src={weatherDesc.includes('cloud') ? Cloudy : Sunny } />
    <div className="weather__desc">{weatherDesc}</div>
    <div className="weather__temp">{Math.floor(temp)}oC</div>
  </React.Fragment>

export default Weather;
