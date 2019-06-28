import React from 'react';
import People from '../people';

const totalCount = People.length;

class TeamPicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfTeams: 4,
      teams: [],
    }
  }

  teamCount = () => {
    return Math.floor(totalCount / this.state.numberOfTeams)
  }

  genderCount = () => {
    return this.teamCount() / 2
  }

  leftOvers = () => {
    return totalCount - (this.teamCount() - this.state.numberOfTeams)
  }

  pick = () => {
    for (var index = 0; index < this.state.numberOfTeams; index++) {
      const array = [...this.pickGender('male'),...this.pickGender('female')]
      this.state.teams.push(array)
    }
    return this.state.teams;
  }

  allGender = (gender) => {
    return People.filter((element) => element.gender == gender);
  }

  inAnotherTeam = (name) => {
    return this.state.teams.flat(2).includes(name);
  }

  pickGender = (gender) => {
    const all = this.allGender(gender);
    let picks = [];
    while (picks.length < this.genderCount()) {
      const randomIndex = Math.floor(Math.random() * all.length);
      const name = all[randomIndex].name;
      if (!this.inAnotherTeam(name) && !picks.includes(name)) {
        picks.push(name);
      }
    }
    return picks
  }
}

export default TeamPicker
