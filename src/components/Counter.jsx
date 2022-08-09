import React from "react";

export default function Counter() {
  
  // Challenge: Set up state to track our count (initial value is 0)
  const [count, setCount] = React.useState(0);

  // function add() {
  //   console.log('add clicked')
  //   setCount(count + 1)
  // }

  // function subtract() {
  //   console.log('subtract clicked')
  //   setCount(count - 1)
  // }

  // YOU CANNOT USE count++ or count += 1 or count = count + 1
  // because this is re-assignment, which you should NOT DO
  // because the function setCount is doing this for us
  

  // THERE IS A BETTER WAY TO DO THIS
  // WE PROVIDE THE useState FUNCTION with another CALLBACK FUNCTION
  // WHICH RETURNS THE NEW STATE WE WANT IT TO BE

  // function add() {
  //   setCount(function() {
  //     return count + 1;
  //   })
  // }
  
  // BEST PRACTICES:
  // ANYTIME WE NEED TO USE OUR OLD STATE VALUE TO DETERMINE A NEW STATE VALUE
  // IF WE PROVIDE THE CALLBACK FUNCTION WILL REACT PASS THIS FUNCTION THE OLD STATE VALUE AS THE PARAMETER
  // AND WE CAN TAKE THAT VALUE AND USE THAT AS OUR REFERENCE TO WHAT THE OLD STATE VALUE WAS AT THE TIME THE FUNCTION WAS CALLED
  // WE NEED TO UNDERSTAND THE WAY REACT RENDERS AND STATE CHANGES TO UNDERSTAND WHY THIS IS BEST PRACTISE

  // function add() {
  //   setCount(function(oldValue) {
  //     return oldValue + 1
  //   })
  // }

  // function add() {
  //   setCount(function(prevCount) {
  //     return prevCount + 1
  //   })
  // }

  function add() {
    setCount(prevCount => prevCount + 1);
  }

  // function subtract() {
  //   setCount(function(prevCount) {
  //     return prevCount - 1
  //   })
  // }

  function subtract() {
    setCount(prevCount => prevCount - 1);
  }


  return (
    <div>
          <h1 className="counter--title">Counter</h1>
          <div className="counter">
            <button className="counter--minus" onClick={subtract}>-</button>
            <div className="counter--count">
              <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
          </div>
    </div>
  );
}

     
// Learning React State, and updating State

// const [count, setCount] = React.useState(0)

// function add() {
// setCount(count + 1)
// }

// function subtract() {
// setCount(count - 1)
// }

// You cannot use count++ or count += 1 or count = count + 1
// because this is re-assignment, which you should not do,
// because the function setCount is doing that part for us

// <button className="counter--minus" onClick={subtract}>-</button>
// <h1>{count}</h1>
// <button className="counter--plus" onClick={add}>+</button>

// But there is a better way to do this^
// We provide the useState function with another callback function
// Which returns the new state we want it to be:

// function add() {
//   setCount(function() {
//     return count + 1;
//   })
// }

// For Best Practices:
// Anytime we need to use our old state value to determine a new state value
// If we provide the callback function, react will pass this function the old state value as the parameter
// And we can take that value and use that as our reference to what the old state value was at the time the function was called
// We need to understand the way React renders and State changes to understand why this is best practise

// function add() {
//   setCount(function(oldValue) {
//     return oldValue + 1
//   })
// }

// And the above using Arrow Functions,
// with the convention of prefixing "prev" to the original state variable name,
// so it reads easier:

// function add() {
//   setCount(prevCount => prevCount + 1)
// }

// So : if you ever need the old value of state to help you determine the new value of state,
// you should pass a callback function to your state setter function instead of using state directly. 
// This callback function will receive the old value of state as its parameter, 
// which you can then use to determine your new value of state.

// Quiz

// 1. You have 2 options for what you can pass in to a
//    state setter function (e.g. `setCount`). What are they?

// [1] the new value of state 
// setCount(42)
// whenever the fucntion gets called the state will be automatically updated to 42

// [2] a callback function which accepts the states old value
// whatever the callback function returns will be the new value of state


// 2. When would you want to pass the first option (from answer
//    above) to the state setter function?

// when you DO NOT need to know the original(previous) value of the state
// anytime you want to update your state and you do NOT need the previous value of state


// 3. When would you want to pass the second option (from answer
//    above) to the state setter function?

// when you DO need to know the orginal(previous) value of the state
// anytime you want to update your state and you DO need the previous value of state


// additional: the reason we do this is so that it recieves the most up-to-date version of State each time it is called