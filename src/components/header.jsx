import React from 'react';
import Chart from '../images/chart.svg';

const Header = ({ clearChoice, daysUntil }) =>
  <div className="header">
    <div className="dashboard__header" onClick={() => clearChoice()}>
      <div className="dashboard__headerInner">
        <div>
          <img src={Chart} alt=""/>
          <h4>Conference 2019</h4>
        </div>
        <div className="countdown">
          <div className="countdown__inner">
            <h1>{daysUntil}</h1>
            <div>days</div>
          </div>
        </div>
      </div>
    </div>
  </div>

export default Header;
