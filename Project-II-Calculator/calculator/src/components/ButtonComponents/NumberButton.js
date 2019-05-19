import React from 'react';
import './Button.css';

const NumberButton = (props) => {
  return (
    <div className="num-div">
      <button className={props.buttonStyle}>{props.text}</button>
    </div>
  )
};

export default NumberButton
