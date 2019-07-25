import React from 'react';
import Header from './components/header';
import Calendar from './components/calendar/index';
import Nav from './components/mainNav/index';
import Picker from './components/matchMaker/index';
import Weather from './components/weather';
import TeamPicker from './components/teamPicker/index';
import Spotify from './images/spotify.png';
import Background from './images/background.png';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { show: false, daysUntil: this.daysUntilStart() }
  }

  toggleChoice = show => this.setState({ show });

  clearChoice = () => this.setState({ show: false });

  daysUntilStart = () => {
    const today = new Date();
    const dt1 = new Date(`${today.getMonth() + 1}/${(today.getDate())}/${today.getFullYear()}`)
    const dt2 = new Date("08/16/2019");
    const diffTime = Math.abs(dt2.getTime() - dt1.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  renderChosenComponent = () => {
    const { show } = this.state;
    return(
      <React.Fragment>
        <div className="main__containerItem--header">{show}</div>
        <div className="main__containerInner">
          { show === 'Love match' && <Picker /> }
          { show === 'Team picker' && <TeamPicker /> }
          { show === 'Playlist' && <a className="spotify__link" href="https://open.spotify.com/playlist/0IWGJoTZBW1nPXKD1C5uUH?si=GoYfuiF7QNSXYqAUQKylHg"><img className="spotify__image" src={Spotify} alt="" /></a> }
          { show === 'Events' && <Calendar /> }
        </div>
      </React.Fragment>
    )
  }

  render() {
    const { show, daysUntil } = this.state;
    return (
      <div className="App">
        <Header clearChoice={this.clearChoice} daysUntil={daysUntil}/>
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
