import React from 'react';
import logo from './logo.svg';
import './App.css';
import Picker from './components/picker';
import People from './people';
import Colours from './colours';
import Header from './images/header.png';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstPick: false,
      secondPick: false,
      firstColour: this.randomPick(Colours),
      secondColour: this.randomPick(Colours)
    }
    this.updateColours();
  }

  allHearts = () => {
    return document.querySelectorAll('.heart');
  }

  moveHearts = () => {
    const that = this;
    this.allHearts().forEach(function (heart) {
      setTimeout(() => that.addMoveClass(heart), Math.random() * (2000 - 0) + 0);
    });
  }

  resetHearts = () => {
    const that = this;
    this.allHearts().forEach(function(heart) {
      that.addResetClass(heart);
    })
  }

  addMoveClass = (element) => {
    element.classList.add('move');
  }

  addResetClass = (element) => {
    element.classList.add('heart-reset');
  }

  handleMatch = () => {
    this.setState({ matching: true });
    setTimeout((this.handleFirstPersonPick), 2000);
    setTimeout((this.handleSecondPersonPick), 4000);
  }

  updateColours = () => {
    const first = this.randomPick(Colours);
    const filteredColours = Colours.filter(colour => colour != first);
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
    const filteredPeople = People.filter(person => person != this.state.firstPick)
    this.setState({ secondPick: this.randomPick(filteredPeople), matching: false })
    this.moveHearts()
  }

  clearMatch = () => {
    this.setState({ firstPick: false, secondPick: false });
    this.updateColours();
    this.resetHearts();
  }

  render() {
    const { firstPick, secondPick, matching, firstColour, secondColour } = this.state;
    return (
      <div className="App">
        <div className="heart"></div>
        <div className="heart one"></div>
        <div className="heart two"></div>
        <div className="heart three"></div>
        <div className="heart four"></div>
        <div className="heart five"></div>
        <Picker
          firstPick={firstPick}
          secondPick={secondPick}
          firstColour={firstColour}
          secondColour={secondColour}
          handleMatch={this.handleMatch}
          clearMatch={this.clearMatch}
          matching={matching}
        />
      </div>
    );
  }
}

export default App;
