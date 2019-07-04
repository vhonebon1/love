import React from 'react';

const Button = ({ handleClick, icon}) =>
  <div className="mainNav__button">
    <img src={icon} alt="" />
  </div>


export default Button;
