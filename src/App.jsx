
import React from 'react';
import './App.css'
import Counter from './components/Counter'
// import Ternary from './components/Ternary';
import Flipping from './components/Flipping';
import StateArrays from './components/StateArrays';
import StateObjects from './components/StateObjects';

export default function App() {
  return (
    <div>
        <h1 className="main-title">Learning about React "State"</h1>
        <Counter />
        {/* <Ternary /> */}
        <Flipping />
        <StateArrays />
        <StateObjects />
    </div>
  )
}