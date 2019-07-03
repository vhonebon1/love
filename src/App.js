import React from 'react';
import './App.css';
import People from './people';
import Header from './components/header';
import Picker from './components/matchMaker/index';
import Weather from './components/weather';
import MatchMaker from './components/matchMaker/index';
import TeamPicker from './components/teamPicker/index';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: 44.1183,
      lon: 5.1435,
      firstPick: false,
      secondPick: false,
      showTeamPicker: false,
      hasData: false
    }
  }

  componentWillMount() {
    this.getWeather();
  }

  getWeather = () => {
    const key = 'd75d6d8d03bc31b75bc9f8783bc53aa8';
    const endpoint = `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&?units=metric&APPID=${key}`
    axios.get(endpoint).then((response) => this.setWeather(response))
  }

  setWeather = (response) => {
    this.setState({ temp: Math.floor(response.data.main.temp - 273.15), weatherDesc: response.data.weather[0].main, hasData: true })
  }

  toggleTeamPicker = () => {
    this.setState({ showTeamPicker: this.state.showTeamPicker})
  }

  handleMatch = () => {
    this.setState({ matching: true });
    setTimeout((this.handleFirstPersonPick), 2000);
    setTimeout((this.handleSecondPersonPick), 4000);
  }

  randomPick = (array) => {
    return array[Math.floor((Math.random() * array.length))]
  }

  handleFirstPersonPick = () => {
    this.setState({ firstPick: this.randomPick(People)})
  }

  handleSecondPersonPick = () => {
    const filteredPeople = People.filter(person => person !== this.state.firstPick)
    this.setState({ secondPick: this.randomPick(filteredPeople), matching: false })
  }

  renderPicker = () => {
    const { firstPick, secondPick, matching, numberOfTeams } = this.state;
    return(
      <Picker
        firstPick={firstPick}
        secondPick={secondPick}
        handleMatch={this.handleMatch}
        clearMatch={this.clearMatch}
        matching={matching}
        hasBothPicks={firstPick && secondPick}
      />
    )
  }

  renderWeather = () => {
    const { temp, weatherDesc } = this.state;
    return(
      <Weather
        temp={temp}
        weatherDesc={weatherDesc}
      />
    )
  }

  render() {
    const { firstPick, secondPick, matching, teams, numberOfTeams, temp, weatherDesc, hasData } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="main__container">
          <div className="main__containerInner vertical">
            <div className="main__containerItem">
              <div className="main__containerItem--header">Weather, Crillon-le-brave</div>
              { hasData && this.renderWeather() }
            </div>
          </div>
          <div className="main__containerInner horizontal">
            <div className="main__containerItem horizontal">
              <div className="main__containerItem--header">Love match</div>
              {this.renderPicker()}
            </div>
            <div className="main__containerItem horizontal">
              <div className="main__containerItem--header">Team picker</div>
              <TeamPicker
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
