import React from 'react';
import axios from 'axios';
import Sunny from '../images/sunny.svg';
import Cloudy from '../images/partly-sunny.svg';

class Weather extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: 44.1183,
      lon: 5.1435,
      hasData: false,
    }
  }

  componentWillMount() {
    this.getWeather();
  }

  getWeather = () => {
    const key = 'd75d6d8d03bc31b75bc9f8783bc53aa8';
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&?units=metric&APPID=${key}`
    axios.get(endpoint).then((response) => this.setWeather(response))
  }

  setWeather = (response) => {
    this.setState({ temp: Math.floor(response.data.main.temp - 273.15),
                    weatherDesc: response.data.weather[0].main,
                    hasData: true })
  }

  render() {
    const { weatherDesc, temp } = this.state;
    return(
      <div>
        <img className="weather__icon" src={weatherDesc.includes('cloud') ? Cloudy : Sunny } />
        <div>
          <div className="weather__desc">{weatherDesc}</div>
          <div className="weather__temp">{Math.floor(temp)}oC</div>
        </div>
      </div>
    )
  }
}

export default Weather;
