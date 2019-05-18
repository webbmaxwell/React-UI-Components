import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton.js'
import ActionButton from './components/ButtonComponents/ActionButton.js'
import Display from './components/DisplayComponents/CalculatorDisplay.js'

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3]

function App() {
  return (
    <div className="app">
      <NumberButton value="7"/>
      <ActionButton />
      <Display />
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
