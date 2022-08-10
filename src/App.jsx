import React from 'react';
import './App.css'
import Counter from './components/Counter'
// import Ternary from './components/Ternary';
import Flipping from './components/Flipping';
import StateArrays from './components/StateArrays';
import StateObjects from './components/StateObjects';
import StateAsProps from './components/StateAsProps';
import SettingStateFromChildComponent from './components/SettingStateFromChildComponent';
import Header from './components/Header';
import Body from './components/Body';

export default function App() {

  const [user, setUser] = React.useState("Joe")

  return (
    <div className="App">
        <h1>Exercises with React "STATE"</h1>
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
        <p>Parent</p>
        <img src="../images/state-as-props-01.png" alt="" />
        <p>Child</p>
        <img src="../images/state-as-props-02.png" alt="" />
        <h2>Setting STATE From Child Component</h2>
        <p>In the Parent Component, the defined function (to toggle) is sent to the Child Component via a custom Prop</p>
        <p>In the Child Component, we recieve Props and set a real eventListener "onClick=" whose value is the function we recieved via Props </p>
        <p>The ability to pass "Setting" Functions from Parent to Child Components is crucial in React</p>
        <SettingStateFromChildComponent />
        <p>Parent</p>
        <img src="../images/setting-state-from-child-component-01.png" alt="" />
        <p>Child</p>
        <img src="../images/setting-state-from-child-component-02.png" alt="" />
        <h2>Passing STATE downwards to multiple Child Components</h2>
        <p>Header :</p>
        <Header user={user}/>
        <p>Body :</p>
        <Body user={user}/>
        <p>Parent :</p>
        <img src="../images/which-level-to-put-state-01.png" alt="" />
        <img src="../images/which-level-to-put-state-02.png" alt="" />
        <p>Children</p>
        <img src="../images/which-level-to-put-state-03.png" alt="" />
        <img src="../images/which-level-to-put-state-04.png" alt="" />
    </div>
  )
}