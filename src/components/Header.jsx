import React from "react"

export default function Header(props) {
   
    return (
            <header>
                <h3>Current user: {props.user}</h3>
            </header>
    )
}

/**
 * Challenge:
 * Raise state up a level and pass it down to both the
 * Header and Body components through props.
 */
// const [user, setUser] = React.useState("Joe")