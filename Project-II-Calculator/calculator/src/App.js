import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js'
import ActionButton from './components/ButtonComponents/ActionButton.js'
import Display from './components/DisplayComponents/CalculatorDisplay.js'
import OperatorButton from './components/ButtonComponents/OperatorButtons.js'

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]

function App() {
  return (
    <div className="app">
      <Display />
      <ActionButton text="clear"/>
      <OperatorButton text="/" />
      <NumberButton text={numbers[0]} buttonStyle="number-button"/>
      <NumberButton text={numbers[1]}  buttonStyle="number-button"/>
      <NumberButton text={numbers[2]}  buttonStyle="number-button"/>
      <OperatorButton text="X" />
      <NumberButton text={numbers[3]}  buttonStyle="number-button"/>
      <NumberButton text={numbers[4]}  buttonStyle="number-button"/>
      <NumberButton text={numbers[5]}  buttonStyle="number-button"/>
      <OperatorButton text="-" />
      <NumberButton text={numbers[6]}  buttonStyle="number-button"/>
      <NumberButton text={numbers[7]}  buttonStyle="number-button"/>
      <NumberButton text={numbers[8]}  buttonStyle="number-button"/>
      <OperatorButton text="+" />
      <ActionButton text={numbers[9]}  buttonStyle="number-button"/>
      <OperatorButton text="=" />
    </div>
  );
};

export default App;

// <h3>Welcome to React Calculator</h3>
// <p>
//   We have given you a starter project. You'll want to build out your
//   components in their respective files, remove this code and replace it
//   with the proper components.
// </p>
// <p>
//   <strong>
//     Don't forget to `default export` your components and import them here
//     inside of this file in order to make them work.
//   </strong>
// </p>



// {numbers.map(number => {
//   <NumberButton value={number} key={number}/>
// })
// }
