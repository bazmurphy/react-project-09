/*
Challenge: complete the function below
Given a name, return "Good <timeOfDay>, <name>!" depending
on the current time of day.

4 am - 11:59 am, timeOfDay = "morning"
12 pm - 4:59 pm: timeOfDay = "afternoon"
5 pm - 7:59 pm: timeOfDay = "evening"
8 pm - 3:59 am: timeOfDay = "night"

E.g. if it's currently 1 pm, greeting("Jane") ==> "Good afternoon, Jane!"

Hint: you can get the current time of day by using: 

const date = new Date()
const hours = date.getHours()
*/

function greeting(name) {

    const date = new Date()
    const hours = date.getHours()

    let timeOfDay;

    if (hours >= 4 && hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else if (hours >= 17 && hours < 20) {
        timeOfDay = "evening"
    } else if (hours >= 20 && hours < 4) {
        timeOfDay = "night"
    }

    return `Good ${timeOfDay}, ${name}!`
}

console.log(greeting("Bob"));

// 1. How would you describe the concept of "state"?

// state is similar to an internal variable inside a function that can be updated

// in normal english "the way that things currently are"
// in react state refers to "values that a component can maintain through render cycles"

// A way for React to remember saved values from within a component.
// This is similar to declaring variables from within a component,
// with a few added bonuses (which we'll get to later)

// 2. When would you want to use props instead of state?

// props is like the parameters that are recieved when the component is "called"
// if you are not wanting to change the data

// Anytime you want to pass data into a component so that
// component can determine what will get displayed on the
// screen.


// 3. When would you want to use state instead of props?

// when you want to keep updating some variable inside your component
// if you are wanting to change/update something inside your component

// Anytime you want a component to maintain some values from
// within the component. (And "remember" those values even
// when React re-renders the component)


// 4. What does "immutable" mean? Are props immutable? Is state immutable?
// immutable means you should not change them
// props are not TECHNICALLY immutable (because you can change them inside the function/component) you just SHOULDNT
// state is not immutable either

// Unchanging. Props are immutable. State is mutable.
// The purpose of declaring state in your component is because you do plan on changing state.





// REACT DOESNT WATCH FOR LOCAL VARIABLE CHANGES

// HOW TO DECLARE STATE INSIDE OUR COMPONENTS

// React has a method called useState
// these methods are also known as HOOKS

React.useState()

// You might see it at the top as (destructured)

import React, {useState} from "react"

// and then in the component you just use

useState()

// ^ this is the common way you will see it

const result = React.useState()
console.log(result)

// useState returns an ARRAY
// the first value is undefined
// the second value is a function
[undefined, ƒ()]

const result = React.useState("Hello")
console.log(result)

// now the first value is the "Hello" we passed in
["Hello", ƒ()]

// so whatever you put in as the parameter
// is the DEFAULT VALUE of the State you want to Save.

export default function App() {
    /**
     * Challenge: Replace our hard-coded "Yes" on the page with 
     * some state initiated with React.useState()
     */
    const result = React.useState("Yes")
    console.log(result)
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1>{result[0]}</h1>
            </div>
        </div>
    )
}


// useState array destructuring

// we can use array destructuring to unpack it right away into result
// now result is just "Yes" instead of the array

const [result, func] = React.useState("Yes")
console.log(result)
// "Yes"

// Because its Array Destructuring we can call it whatever we want
// (not Object Destructuring where we have to use the property name)

const [whateverWeWant, func] = React.useState("Yes")
console.log(whateverWeWant)
// "Yes"

// use a variable name that makes sense for what we are trying to keep track of


// changing state

// if this was normal JS we could do:
let isImportant = "Yes"
isImportant = "No"
// to change the value
// when we are working with State we cannot do this
// we are given a FUNCTION that can HANDLE these changes

// the convention (when destructuring) is to call this FUNCION "set"
// and then attach the state variable name to the end

const [isImportant, setIsImportant] = React.useState("Yes")
// and we can use this function, and whatever value we pass it, is the NEW/Updated version of State
setIsImportant("No")


export default function App() {
    /**
     * Challenge: 
     * 1. Create a function called `handleClick` that runs
     *    setIsImportant("No")
     * 2. add a click event listener to the div.state--value
     *    that runs `handleClick` when the div is clicked.
     */

    const [isImportant, setIsImportant] = React.useState("Yes")
    
    function handleClick() {
        setIsImportant("No")
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value" onClick={handleClick}>
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}



export default function App() {
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */

    const [currentCount, setCurrentCount] = React.useState(0)
    
    function addOne() {
        setCurrentCount(currentCount += 1);
    }

    function minusOne() {
        setCurrentCount(currentCount -= 1);
    }

    return (
        <div className="counter">
            <button className="counter--minus" onClick={minusOne}>–</button>
            <div className="counter--count">
                <h1>{currentCount}</h1>
            </div>
            <button className="counter--plus" onClick={addOne}>+</button>
        </div>
    )
}

