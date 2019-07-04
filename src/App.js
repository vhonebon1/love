import React from 'react';
import './App.css';
import People from './people';
import Header from './components/header';
import Calendar from './components/calendar/index';
import MainNav from './components/mainNav/index';
import Picker from './components/matchMaker/index';
import Weather from './components/weather';
import TeamPicker from './components/teamPicker/index';
import Spotify from './images/spotify.png';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showTeamPicker: false,
      choice: null
    }
  }

  toggleChoice = (choice) => {
    this.setState({ choice })
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
        <Header />
        <MainNav toggleChoice={this.toggleChoice} />
      </div>
    );
  }
}

export default App;
