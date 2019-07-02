import React from 'react';
import './App.css';
import People from './people';
import Colours from './colours';
import Header from './components/header';
import MatchMaker from './components/matchMaker/index';
import TeamPicker from './components/teamPicker/index';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstPick: false,
      secondPick: false,
      showTeamPicker: false
    }
  }

  componentWillMount() {
    this.updateColours()
  }

  toggleTeamPicker = () => {
    this.setState({ showTeamPicker: this.state.showTeamPicker})
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

  render() {
    const { firstPick, secondPick, matching, firstColour, secondColour, teams, numberOfTeams } = this.state;
    return (
      <div className="App">
        { teams ?
          this.renderTeams()
          :
          <React.Fragment>
            <MatchMaker
              firstPick={firstPick}
              secondPick={secondPick}
              matching={matching}
              firstColour={firstColour}
              secondColour={secondColour}
              handleMatch={this.handleMatch}
              clearMatch={this.clearMatch}
              hasBothPicks={firstPick && secondPick}
            />
            <div onClick={() => this.toggleTeamPicker()}>Pick teams</div>
            <TeamPicker />
          </React.Fragment>
        }
      </div>
    );
  }
}

export default App;
