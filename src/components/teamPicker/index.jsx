import React from 'react';
import People from '../../people';
import Button from './button';
import Eliminator from './eliminator';
import { formattedName } from '../../utils/formattedName';

const totalCount = People.length;
const teamOptions = [1,2,3,4,5,6];
const teamColours = ['#88b04b', '#0080ff', '#c8102e', '#ff8000', '#ffdb00', '#a409ab'];

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
    this.setState({ teams: teams })
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
    return this.state.included.filter((element) => element === person).length > 0;
  }

  toggleInclusion = (person) => {
    this.isIncluded(person) ? this.exclude(person) : this.include(person);
  }

  include = (person) => {
    this.state.included.push(person);
  }

  exclude = (person) => {
    this.setState({ included: this.state.included.filter((element) => element !== person) })
  }

  toggleEveryone = (everyone) => {
    this.setState({ everyone })
  }

  renderTeamMembers = (team, index) => {
    return(
      team.map((person) => {
        return <div className="button" style={{backgroundColor: teamColours[index]}}>{formattedName(person)}</div>
      })
    )
  }

  render() {
    const hasTeams = this.state.teams.length > 0;
    return(
      <div className="teamPicker__wrapper">
        { hasTeams ?
          <React.Fragment>
            {this.state.teams.map((team, index) => {
              return <p className="teamPicker__innerWrapper">{this.renderTeamMembers(team, index)}</p>
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
