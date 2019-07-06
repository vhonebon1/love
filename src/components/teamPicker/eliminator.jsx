import React from 'react';
import { formattedName } from '../../utils/formattedName';
import People from '../../people';

const Eliminator = ({ toggleEveryone, toggleInclusion, included, everyone }) =>
  <React.Fragment>
    <div className="teamPicker__button--wrapper">
      <div onClick={() => toggleEveryone(true)} className={`button ${everyone ? 'active' : 'inactive'}`}>
        Everyone
      </div>
      <div onClick={() => toggleEveryone(false)} className={`button ${!everyone ? 'active' : 'inactive'}`}>
        Remove people
      </div>
    </div>
    <div className="teamPicker__button--wrapper">
      { !everyone && People.map((person) => {
        return(
          <div
            id={person}
            onClick={() => toggleInclusion(person)}
            className={`button person ${included.filter((elem) => elem === person).length > 0 ? 'active' : 'inactive'}`}>
            {formattedName(person)}
          </div>)
        })
      }
    </div>
  </React.Fragment>

export default Eliminator;
