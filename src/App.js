import React from 'react';
import axios from 'axios';
import './App.css';
import People from './people';
import Header from './components/header';
import Calendar from './components/calendar/index';
import Picker from './components/matchMaker/index';
import Weather from './components/weather';
import TeamPicker from './components/teamPicker/index';
import Spotify from './images/spotify.png';

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

  toggleTeamPicker = () => {
    this.setState({ showTeamPicker: true })
  }

  setWeather = (response) => {
    this.setState({ temp: Math.floor(response.data.main.temp - 273.15),
                    weatherDesc: response.data.weather[0].main,
                    hasData: true })
  }

  toggleTeamPicker = () => {
    this.setState({ showTeamPicker: this.state.showTeamPicker})
  }

  handleMatch = () => {
    this.setState({ matching: true });
    setTimeout((this.handleFirstPersonPick), 2000);
    setTimeout((this.handleSecondPersonPick), 4000);
  }

  clearMatch = () => {
    this.setState({ firstPick: false, secondPick: false })
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

  renderMain() {
    const { temp, weatherDesc } = this.state;
    return(
      <React.Fragment>
        <div className="main__containerInner vertical">
          <div className="main__containerItem vertical">
            <div className="main__containerItem--header">Weather, Crillon-le-brave</div>
            { this.state.hasData && <Weather temp={temp} weatherDesc={weatherDesc} /> }
          </div>
          <div className="main__containerItem vertical">
            <div className="main__containerItem--header">Playlist</div>
            <a href="https://open.spotify.com/playlist/0IWGJoTZBW1nPXKD1C5uUH?si=GoYfuiF7QNSXYqAUQKylHg">
              <img className="spotify__image" src={Spotify} alt="" />
            </a>
          </div>
        </div>
        <div className="main__containerInner horizontal">
          <div className="main__containerItem horizontal">
            <div className="main__containerItem--header">Love match</div>
            {this.renderPicker()}
          </div>
          <div className="main__containerItem horizontal">
            <div className="main__containerItem--header">Events</div>
            <Calendar />
          </div>
        </div>
      </React.Fragment>
    )
  }

  render() {
    return (
      <div className="App">
        <Header toggleTeamPicker={this.toggleTeamPicker} />
        <div className="main__container">
          <div className="container">
            { this.state.showTeamPicker ? <TeamPicker /> : this.renderMain() }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
