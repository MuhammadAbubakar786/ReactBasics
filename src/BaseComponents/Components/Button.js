import React, { useContext } from 'react'
import counterContext from './CounterContext'
import counterReducer from './counterReducer'
function Button() {
    const SetCounter = useContext(counterContext)
    const [state, dispatch] = React.useReducer(counterReducer, 0)
    return (
        < div >
            <button onClick={() => { SetCounter[1](++SetCounter[0]) }}>Increment</button>
        </div >
    )
}

export default Button
