import React from 'react';
import Picker from './picker';
import People from '../../people';

class MatchMaker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstPick: false,
      secondPick: false,
      matching: false,
    }
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

  handleMatch = () => {
    this.setState({ matching: true });
    setTimeout((this.handleFirstPersonPick), 2000);
    setTimeout((this.handleSecondPersonPick), 4000);
  }

  clearMatch = () => {
    this.setState({ firstPick: false, secondPick: false })
  }

  render() {
    const { firstPick, secondPick, matching } = this.state;

    return(
      <React.Fragment>
        <Picker
          firstPick={firstPick}
          secondPick={secondPick}
          matching={matching}
          handleMatch={this.handleMatch}
          clearMatch={this.clearMatch}
          hasBothPicks={firstPick && secondPick}
        />
      </React.Fragment>
    )
  }
}

export default MatchMaker;
