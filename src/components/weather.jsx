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
    const endpoint = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${this.state.lat}&lon=${this.state.lon}&cnt=1&?units=metric&APPID=${key}`
    // const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&?units=metric&APPID=${key}`
    axios.get(endpoint).then((response) => this.setWeather(response))
  }

  setWeather = (response) => {
    const min = response.data.list[0].temp.min;
    const max = response.data.list[0].temp.max
    this.setState({ temp: Math.floor(max - 273.15),
                    weatherDesc: response.data.list[0].weather[0].main,
                    hasData: true })
  }

  render() {
    const { weatherDesc, temp, hasData } = this.state;
    return(
      <React.Fragment>
        <div class="ticker-wrap">
          <div class="ticker">
            <div class="ticker__item">{`Crillon-le-brave max temp today: ${Math.floor(temp)}°C (${weatherDesc})`}</div>
          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default Weather;
