import React from 'react';
import People from '../../people';
import { formattedName } from '../../utils/formattedName';

class Eliminator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      everyone: true,
      included: People
    }
  }

  isIncluded = (person) => {
    return this.state.included.filter((element) => element.name == person.name).length > 0;
  }

  toggleInclusion = (person) => {
    this.isIncluded(person) ? this.exclude(person) : this.include(person)
  }

  exclude = (person) => {
    this.setState({ included: this.state.included.filter((element) => element.name !== person.name) })
  }

  include = (person) => {
    this.state.included.push(person)
    const button = document.querySelector(`#${person.name}`);
    button.classList.remove('inactive');
    button.classList.add('active');
  }

  toggleEveryone = (value) => {
    this.setState({ everyone: value })
  }

  renderActionButtons = () => {
    const { everyone } = this.state;
    return(
      <div className="teamPicker__button--wrapper">
        <div onClick={() => this.toggleEveryone(true)} className={`button ${everyone ? 'active' : 'inactive'}`}>
          Everyone
        </div>
        <div onClick={() => this.toggleEveryone(false)} className={`button ${!everyone ? 'active' : 'inactive'}`}>
          Remove people
        </div>
      </div>
    )
  }

  render() {
    const { included, everyone } = this.state;
    return(
      <React.Fragment>
        { this.renderActionButtons() }
        <div className="teamPicker__button--wrapper">
          { !everyone && People.map((person) => {
            return(
              <div
                id={person.name}
                onClick={() => this.toggleInclusion(person)}
                className={`button person ${included.filter((elem) => elem.name == person.name).length > 0 ? 'active' : 'inactive'}`}>
                {formattedName(person.name)}
              </div>)
            })
          }
        </div>
    </React.Fragment>
    )
  }
}
export default Eliminator;
