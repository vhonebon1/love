import React from 'react';
import match from '../../images/match.svg';
import teams from '../../images/teams.svg';
import playlist from '../../images/playlist.svg';
import events from '../../images/events.svg';

const MainNav = ({ toggleChoice }) =>
  <div className="mainNav">
    <div className="mainNav__wrapper">
      <div onClick={() => toggleChoice('match')} className="mainNav__button">
        <img src={match} alt="" />
      </div>
      <div onClick={() => toggleChoice('teams')} className="mainNav__button">
        <img src={teams} alt="" />
      </div>
      <div onClick={() => toggleChoice('playlist')} className="mainNav__button">
        <img src={playlist} alt="" />
      </div>
      <div onClick={() => toggleChoice('events')} className="mainNav__button">
        <img src={events} alt="" />
      </div>
    </div>
  </div>

export default MainNav;
