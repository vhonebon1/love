import React from 'react';
import Header from './components/header';
import Calendar from './components/calendar/index';
import Nav from './components/mainNav/index';
import Picker from './components/matchMaker/index';
import Weather from './components/weather';
import TeamPicker from './components/teamPicker/index';
import Spotify from './images/spotify.png';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { show: false }
  }

  toggleChoice = show => this.setState({ show });

  clearChoice = () => this.setState({ show: false });

  renderChosenComponent = () => {
    const { show } = this.state;
    return(
      <React.Fragment>
        <div className="main__containerItem--header">{show}</div>
        <div className="main__containerInner">
          { show === 'Love match' && <Picker /> }
          { show === 'Team picker' && <TeamPicker /> }
          { show === 'Playlist' && <a href="https://open.spotify.com/playlist/0IWGJoTZBW1nPXKD1C5uUH?si=GoYfuiF7QNSXYqAUQKylHg"><img className="spotify__image" src={Spotify} alt="" /></a> }
          { show === 'Events' && <Calendar /> }
        </div>
      </React.Fragment>
    )
  }

  render() {
    const { show } = this.state;
    return (
      <div className="App">
        <Header clearChoice={this.clearChoice} />
        { !show && <Weather /> }
        <Nav toggleChoice={this.toggleChoice} mini={show} />
        { show &&
          <div className="main__containerItem">
            { this.renderChosenComponent() }
          </div>
        }
      </div>
    )
  }
}

export default App;
