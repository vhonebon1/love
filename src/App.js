import React from 'react';
import './App.css';
import People from './people';
import Colours from './colours';
import Header from './components/header';
import MatchMaker from './components/matchMaker/index';
import TeamPicker from './components/teamPicker/index';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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
    const lat = 44.1183;
    const lon = 5.1435;
    const key = 'd75d6d8d03bc31b75bc9f8783bc53aa8';
    const endpoint = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&?units=metric&APPID=${key}`
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

  updateColours = () => {
    const first = this.randomPick(Colours);
    const filteredColours = Colours.filter(colour => colour !== first);
    const second = this.randomPick(filteredColours);
    this.setState({ firstColour: first,
                    secondColour: second })
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
    this.moveHearts()
  }

  render() {
    const { firstPick, secondPick, matching, teams, numberOfTeams } = this.state;
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
