import React from 'react';
import Picker from './picker';

const MatchMaker = ({ firstPick, secondPick, matching, handleMatch, clearMatch }) =>
  <React.Fragment>
    <Picker
      firstPick={firstPick}
      secondPick={secondPick}
      matching={matching}
      handleMatch={handleMatch}
      clearMatch={clearMatch}
      hasBothPicks={firstPick && secondPick}
    />
  </React.Fragment>

export default MatchMaker;
