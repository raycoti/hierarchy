import React, {Component} from 'react';

const AnswerButton = ({val, click})=> {
  return (
    <button value={val} onClick={click}>{val}</button>
  )
}

export default AnswerButton;
