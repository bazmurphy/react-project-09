import React from "react"

export default function Body(props) {
    return (
        <section>
            <h1>Welcome back, {props.user}!</h1>
        </section>
    )
}

/**
 * Challenge:
 * Raise state up a level and pass it down to both the
 * Header and Body components through props.
 */
// const [user, setUser] = React.useState("Joe")