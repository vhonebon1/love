import React from 'react';
import People from '../../people';
import Button from './button';
import Eliminator from './eliminator';

const totalCount = People.length;
const teamOptions = [1,2,3,4,5,6]

class TeamPicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfTeams: this.props.numberOfTeams,
      teams: [],
      included: People,
      everyone: true
    }
  }

  setTeamNumber = (numberOfTeams) => {
    this.setState({ numberOfTeams })
  }

  shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  teamIndexes = () => {
    var list = [];
    for (var i = 0; i <= (this.state.numberOfTeams - 1); i++) {
      list.push(i);
    }
    return list;
  }

  assignLeftovers = () => {
    const { included, teams } = this.state;
    const leftOvers = included.filter(e => !teams.flat(2).includes(e));
    if (leftOvers.length > 0) {
      leftOvers.forEach((person, index) => {
        teams[index].push(person);
      })
    }
    return teams;
  }

  pick = () => {
    const { included, numberOfTeams, teams } = this.state;
    const numberPeople = Math.floor(included.length / numberOfTeams)
    const shuffled = this.shuffle(included);
    this.teamIndexes().forEach((i) => {
      teams.push(shuffled.slice(i*numberPeople, (((i+1)*numberPeople))))
    });
    this.assignLeftovers();
  }

  isIncluded = (person) => {
    return this.state.included.filter((element) => element.name === person.name).length > 0;
  }

  toggleInclusion = (person) => {
    this.isIncluded(person) && this.exclude(person);
  }

  exclude = (person) => {
    this.setState({ included: this.state.included.filter((element) => element.name !== person.name) })
  }

  toggleEveryone = (everyone) => {
    this.setState({ everyone })
  }

  renderTeamMembers = (team) => {
    return(
      team.map((person) => {
        return <div>{person}</div>
      })
    )
  }

  render() {
    const hasTeams = this.state.teams.length > 0;
    return(
      <div className="teamPicker__wrapper">
        { hasTeams ?
          <React.Fragment>
            {this.state.teams.map((team) => {
              return <p>{this.renderTeamMembers(team)}</p>
            })}
          </React.Fragment>
          :
          <React.Fragment>
            <div className="teamPicker__button--wrapper">
              { teamOptions.map((option) => {
                return (<Button
                  option={option}
                  setTeamNumber={this.setTeamNumber}
                  active={option === this.state.numberOfTeams}
                />)
              })
              }
            </div>
            <Eliminator
              included={this.state.included}
              toggleInclusion={this.toggleInclusion}
              toggleEveryone={this.toggleEveryone}
              everyone={this.state.everyone}
            />
            <div className="button large" onClick={() => this.pick()}>Pick teams</div>
          </React.Fragment>
        }
      </div>
    )
  }
}

export default TeamPicker;
