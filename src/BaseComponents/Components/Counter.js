import React from 'react'

function Counter() {
    const [count, setcount] = React.useState(0);
    return (
        <div>
            <h1 style={{ margin: "50px auto" }}>You Clicked  me {count}</h1>
            <button onClick={() => { setcount(count + 1) }}>Click me</button>
        </div>
    )
}
export default Counter

