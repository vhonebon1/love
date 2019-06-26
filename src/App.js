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
    const { firstPick, secondPick } = this.state;
    setTimeout((this.handleFirstPick), 2000);
    setTimeout((this.handleSecondPick), 4000);
  }

  handleFirstPick = () => {
    this.setState({ firstPick: People[Math.floor((Math.random() * People.length) + 1)]})
  }

  handleSecondPick = () => {
    this.setState({ secondPick: People[Math.floor((Math.random() * People.length) + 1)]})
  }

  clearMatch = () => {
    this.setState({ firstPick: false, secondPick: false })
  }

  randomPick = (first = true) => {
    const randomIndex = Math.floor((Math.random() * People.length) + 1);
    first ? this.setState({ firstPick: People[randomIndex] }) : this.setState({ secondPick: People[randomIndex] })
  }

  render() {
    const { firstPick, secondPick } = this.state;
    return (
      <div className="App">
        <Picker
          firstPick={firstPick}
          secondPick={secondPick}
          handleMatch={this.handleMatch}
          clearMatch={this.clearMatch}
        />
      </div>
    );
  }
}

export default App;
