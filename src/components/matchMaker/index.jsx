import React from 'react';
import Hearts from './hearts';
import Picker from './picker';

const MatchMaker = ({ firstPick, secondPick, matching, firstColour, secondColour, handleMatch, clearMatch }) =>
  <React.Fragment>
    <Hearts />
    <Picker
      firstPick={firstPick}
      secondPick={secondPick}
      matching={matching}
      firstColour={firstColour}
      secondColour={secondColour}
      handleMatch={handleMatch}
      clearMatch={clearMatch}
      hasBothPicks={firstPick && secondPick}
    />
  </React.Fragment>

export default MatchMaker;
