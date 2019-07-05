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
      teams: []
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
    const leftOvers = People.filter(e => !this.state.teams.flat(2).includes(e));
    if (leftOvers.length > 0) {
      leftOvers.forEach((person, index) => {
        this.state.teams[index].push(person);
      })
    }
    console.log(this.state.teams)
    return this.state.teams;
  }

  pick = () => {
    const numberPeople = Math.floor(totalCount / this.state.numberOfTeams)
    const shuffled = this.shuffle(People);
    this.teamIndexes().forEach((i) => {
      this.state.teams.push(shuffled.slice(i*numberPeople, (((i+1)*numberPeople))))
    });
    this.assignLeftovers()
  }

  allGender = (gender) => {
    return People.filter((element) => element.gender === gender);
  }

  inAnotherTeam = (name) => {
    return this.state.teams.flat(2).includes(name);
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
            <Eliminator />
            <div className="button large" onClick={() => this.pick()}>Pick teams</div>
          </React.Fragment>
        }
      </div>
    )
  }
}

export default TeamPicker;
