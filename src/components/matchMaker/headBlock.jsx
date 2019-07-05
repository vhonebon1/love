import React from 'react';
import Spinner from '../spinner';
import QuestionMark from '../../images/question_mark.svg';
import { formattedName } from '../../utils/formattedName';

const HeadBlock = ({ person, matching }) =>
  <i className="fas fa-heart" style={{color:"green"}}></i>

export default HeadBlock;
