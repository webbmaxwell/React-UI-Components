import React from 'react';
import './Button.css';

const NumberButton = (props) => {
  return (
    <div className="number-button">
      <p>{props.value}</p>
    </div>
  )
};
// {props.}

export default NumberButton
