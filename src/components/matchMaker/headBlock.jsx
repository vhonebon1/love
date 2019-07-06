import React from 'react';
import Spinner from '../spinner';
import Heart from '../../images/heart.svg';
import { formattedName } from '../../utils/formattedName';

const HeadBlock = ({ person, matching }) =>
  <div className="headBlock">
    <div className="headBlock__inner">
      { person ?
        <img className="headBlock__image" src={require(`../../images/faces/${person}.png`)}  alt="" />
        : matching ? <Spinner />
      : <img className="headBlock__heart" src={Heart} alt="" />
      }
    </div>
    { person && <p>{formattedName(person)}</p>}
  </div>

export default HeadBlock;
