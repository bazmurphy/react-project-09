import React from 'react';
import './App.css'
import Counter from './components/Counter'
// import Ternary from './components/Ternary';
import Flipping from './components/Flipping';
import StateArrays from './components/StateArrays';
import StateObjects from './components/StateObjects';
import StateAsProps from './components/StateAsProps';

export default function App() {
  return (
    <div className="App">
        <h1>React "State" Learning :</h1>
        <h2>Counter :</h2>
        <p>Changing STATE value (numbers)</p>
        <Counter />
        {/* <Ternary /> */}
        <h2>Flipping :</h2>
        <p>Swapping STATE value (boolean)</p>
        <Flipping />
        <h2>State Arrays :</h2>
        <p>Adding elements to a STATE Array</p>
        <StateArrays />
        <h2>State Objects :</h2>
        <p>Changing STATE Object properties</p>
        <StateObjects />
        <h2>State As Props :</h2>
        <p>Parent Component has a STATE value, Child Component is passed that STATE value as PROPS</p>
        <StateAsProps />
    </div>
  )
}