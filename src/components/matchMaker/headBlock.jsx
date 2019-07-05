import React from 'react';
import Spinner from '../spinner';
import QuestionMark from '../../images/question_mark.svg';
import { formattedName } from '../../utils/formattedName';

const HeadBlock = ({ person, matching }) =>
  <div className="headBlock">
    <div className={`headBlock__inner ${person && 'noBorder'}`}>
      { person ?
        <img className="headBlock__image" src={require(`../../images/faces/${person.name}.png`)}  alt="" />
        : matching ? <Spinner />
        : <img className="headBlock__questionMark" src={QuestionMark} alt="" />
      }
    </div>
    { person && <p>{formattedName(person.name)}</p>}
  </div>

export default HeadBlock;
