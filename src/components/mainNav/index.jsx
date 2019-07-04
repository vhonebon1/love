import React from 'react';
import match from '../../images/match.svg';
import teams from '../../images/teams.svg';
import playlist from '../../images/playlist.svg';
import events from '../../images/events.svg';

const Nav = ({ toggleChoice, mini }) =>
  <div className={mini ? "miniNav" : "mainNav"}>
    <div className={mini ? "miniNav__wrapper" : "mainNav__wrapper"}>
      <div onClick={() => toggleChoice('Love match')} className={mini ? "miniNav__button" : "mainNav__button"}>
        <img src={match} alt="" />
      </div>
      <div onClick={() => toggleChoice('Team picker')} className={mini ? "miniNav__button" : "mainNav__button"}>
        <img src={teams} alt="" />
      </div>
      <div onClick={() => toggleChoice('Playlist')} className={mini ? "miniNav__button" : "mainNav__button"}>
        <img src={playlist} alt="" />
      </div>
      <div onClick={() => toggleChoice('Events')} className={mini ? "miniNav__button" : "mainNav__button"}>
        <img src={events} alt="" />
      </div>
    </div>
  </div>

export default Nav;
