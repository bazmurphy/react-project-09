import React from 'react';

export default function Ternary() {

    const isGoingOut = true;
    
    // Ternary operator:
    // let answer = isGoingOut === true ? "Yes" : "No";
    
    // we can move this down there \/

    // so that every time the component is rendered it will check the value of isGoingOut
    // and it will determine if the text "Yes" or "No" should be used as the string for the h1
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value">
                {/* <h1>{answer}</h1> */}
                <h1>{isGoingOut === true ? "Yes" : "No"}</h1>
            </div>
        </div>
    );
}