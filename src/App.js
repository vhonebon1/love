import React from 'react';
import logo from './logo.svg';
import './App.css';
import Picker from './components/picker';
import People from './people';

const colours = ["#3cd070", "#e0115f", "#ff9933", "#ccccff", "#002444"]
const totalCount = People.length;

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
    setTimeout(this.randomFirstPick(), 4000);
    setTimeout(this.randomSecondPick(), 7000);
  }

  clearMatch = () => {
    this.setState({ firstPick: false, secondPick: false })
  }

  randomFirstPick = () => {
    const randomIndex = Math.floor((Math.random() * totalCount) + 1);
    this.setState({ firstPick: People[randomIndex] })
  }

  randomSecondPick = () => {
    const randomIndex = Math.floor((Math.random() * totalCount) + 1);
    this.setState({ secondPick: People[randomIndex] })
  }

  render() {
    console.log(People)
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
