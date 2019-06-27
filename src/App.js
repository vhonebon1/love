import React from 'react';
import logo from './logo.svg';
import './App.css';
import Picker from './components/picker';
import People from './people';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstPick: false,
      secondPick: false
    }
  }

  handleMatch = () => {
    this.setState({ matching: true });
    const { firstPick, secondPick } = this.state;
    setTimeout((this.handleFirstPick), 2000);
    setTimeout((this.handleSecondPick), 4000);
  }

  randomPerson = () => {
    return People[Math.floor((Math.random() * People.length) + 1)]
  }

  handleFirstPick = () => {
    this.setState({ firstPick: this.randomPerson()})
  }

  handleSecondPick = () => {
    this.setState({ secondPick: this.randomPerson(), matching: false })
  }

  clearMatch = () => {
    this.setState({ firstPick: false, secondPick: false })
  }

  render() {
    const { firstPick, secondPick, matching } = this.state;
    return (
      <div className="App">
        <Picker
          firstPick={firstPick}
          secondPick={secondPick}
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
