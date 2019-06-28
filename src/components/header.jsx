import React from 'react';
import Header1 from '../images/header1.png';
import Header2 from '../images/header2.png';

const Header = () =>
  <div className="header__wrapper">
    <img className="header__image" alt="" src={Header1} />
    <img className="header__image" alt="" src={Header2} />
  </div>

export default Header;
