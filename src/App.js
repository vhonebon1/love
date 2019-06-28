import React from 'react';
import './App.css';
import Picker from './components/picker';
import People from './people';
import Colours from './colours';
import Header from './components/header';
import Hearts from './components/hearts';
import TeamPicker from './components/teamPicker';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstPick: false,
      secondPick: false,
    }
  }

  componentWillMount() {
    this.updateColours()
  }

  setTeams = (teams) => {
    this.setState({ teams })
  }

  moveHearts = () => {
    const allHearts = document.querySelectorAll('.heart');
    allHearts.forEach((heart) => {
      setTimeout(() => this.addMoveClass(heart), Math.random() * (2000 - 0) + 0);
    });
  }

  addMoveClass = (element) => {
    element.classList.add('move');
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

  renderTeam = () => {
    return(
      
    )
  }

  renderTeams = () => {
    return(
      this.state.teams.map((team) => {
        return (
          this.renderTeam();
        )
      })
    )
  }

  render() {
    const { firstPick, secondPick, matching, firstColour, secondColour, teams } = this.state;
    return (
      <div className="App">
        { teams ?
          this.renderTeams()
          :
          <React.Fragment>
            <Hearts />
            <Picker
              firstPick={firstPick}
              secondPick={secondPick}
              matching={matching}
              firstColour={firstColour}
              secondColour={secondColour}
              handleMatch={this.handleMatch}
              clearMatch={this.clearMatch}
            />
            <div onClick={() => this.setState({ teams: new TeamPicker().pick()})}>Pick teams</div>
          </React.Fragment>
        }
      </div>
    );
  }
}

export default App;
