import React from 'react';
import logo from './logo.svg';
import './App.css';
import Picker from './components/picker';
import People from './people';
import Colours from './colours';
import Header from './components/header';

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
    this.allHearts().forEach((heart) => {
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

  render() {
    const { firstPick, secondPick, matching, firstColour, secondColour } = this.state;
    return (
      <div className="App">
        <Header />
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
          hasBothPicks={firstPick && secondPick}
          matching={matching}
        />
      </div>
    );
  }
}

export default App;
