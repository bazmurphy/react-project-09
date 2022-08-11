import React from 'react';

export default function Flipping() {
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */

    const [isGoingOut, setIsGoingOut] = React.useState(true);

    function flip() {
        setIsGoingOut(
            function(prevIsGoingOut) {
                // console.log(prevIsGoingOut)
                return prevIsGoingOut === true ? false : true;
            }
        )
    }

    // function flip() {
    //     setIsGoingOut(prevIsGoingOut => !prevIsGoingOut)
    // }
    
    // ^ this is a clever way to say "just return the opposite"
    
    return (
    <div className="state">
        <h3 className="state--title">Do you like bananas?</h3>
        <div className="state--value" onClick={flip}>
            <h1>{isGoingOut ? "Yes" : "No"}</h1>
        </div>
    </div>
    )
}