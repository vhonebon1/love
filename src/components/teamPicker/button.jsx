import React from 'react';

const Button = ({ option, setTeamNumber }) =>
  <div className="teamPicker__button" onClick={() => setTeamNumber(option)}>
    {option} teams
  </div>

export default Button;
