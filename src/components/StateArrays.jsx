import React from 'react';

export default function StateArrays() {
    
    // Challenge: Convert the code below to use an array
    // held in state instead of a local variable. Initialize 
    // the state array with the same 2 items below
     
    // Don't worry about fixing `addItem` quite yet.
    
    //  const thingsArray = ["Thing 1", "Thing 2"]
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

    function addItem() {

        setThingsArray(function(prevThingsArray) {

            // prevThingsArray.push(`Thing ${prevThingsArray.length + 1}`)
            // ^ is what i tried
            // THIS IS NOT CORRECT, THIS IS MODIFYING THE STATE, WHICH WE KNOW NOT TO DO
            // ALSO PUSH RETURNS THE LENGTH OF THE NEW ARRAY AS A NUMBER WHICH WE DONT WANT

            return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
        })
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button className="state-arrays-button" onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}