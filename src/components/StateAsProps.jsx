import React from "react";
import Count from "./Count";

export default function StateAsProps() {

    console.log("StateAsProps component rendered")

    const [count, setCount] = React.useState(0)
    
    function add() {
        setCount(prevCount => prevCount + 1)
    }
    
    function subtract() {
        setCount(prevCount => prevCount - 1)
    }   

    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>-</button>
            <Count number={count} />
            {/* 
            Parent Component "StateAsProps" has a "State" value called "count"}
            the Child Component "Count" recieves that "State" value via "Props" 
            */}
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}

/**
 * Challenge:
 * - Create a new component named Count
 *    - It should receive a prop called `number`, whose value
 *      is the current value of our count
 *    - Have the component render the whole div.counter--count
 *      and display the incoming prop `number`
 * - Replace the div.counter--count below with an instance of
 *   the new Count component
 */