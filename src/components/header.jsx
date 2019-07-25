import React from 'react';

const Header = ({ clearChoice, daysUntil }) =>
  <div className="header">
    <div className="dashboard__header" onClick={() => clearChoice()}>
      <div className="dashboard__headerInner">
        <h4>Conference <p className="headerDate">2019</p></h4>
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
