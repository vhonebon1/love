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
    console.log(numberOfTeams)
    this.setState({ numberOfTeams })
  }

  pick = () => {
    const { numberOfTeams } = this.state;
    for (var index = 0; index < numberOfTeams; index++) {
      const array = [...this.pickGender('male', numberOfTeams),...this.pickGender('female', numberOfTeams)]
      console.log(array)
      this.state.teams.push(array)
    }
  }

  allGender = (gender) => {
    return People.filter((element) => element.gender == gender);
  }

  inAnotherTeam = (name) => {
    return this.state.teams.flat(2).includes(name);
  }

  pickGender = (gender) => {
    const all = this.allGender(gender);
    const genderCount = (Math.floor(totalCount / this.state.numberOfTeams)) / 2;
    let picks = [];
    while (picks.length < genderCount) {
      const randomIndex = Math.floor(Math.random() * all.length);
      const name = all[randomIndex].name;
      if (!this.inAnotherTeam(name) && !picks.includes(name)) {
        picks.push(name);
      }
    }
    return picks
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
      <React.Fragment>
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
                />)
              })
              }
            </div>
            <Eliminator />
            <div onClick={() => this.pick()}>Pick teams</div>
          </React.Fragment>
        }
      </React.Fragment>
    )
  }
}

export default TeamPicker;
