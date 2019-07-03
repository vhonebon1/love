import React from 'react';
import Sunny from '../images/sunny.svg';
import Cloudy from '../images/partly-sunny.svg';

const Weather = ({ temp, weatherDesc }) =>
  <div>
    <img className="weather__icon" src={weatherDesc.includes('cloud') ? Cloudy : Sunny } />
    <div>
      <div className="weather__desc">{weatherDesc}</div>
      <div className="weather__temp">{Math.floor(temp)}oC</div>
    </div>
  </div>

export default Weather;
