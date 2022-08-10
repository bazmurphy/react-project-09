import React from "react";

export default function Count(props) {

    console.log("Count component rendered")

    return (
        <div className="counter--count">
            <h1>{props.number}</h1>
            {/* 
            props are the properties passed to the Component "Count" (like parameters), 
            in this case, the props passed to it, is a "State" value from its Parent Component
            Count number={count}
            count is a "State" value inside the StateAsProps.jsx Parent Component 
            */}
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