import React, { useReducer } from 'react'
import Button from './Button'
import CounterReducer from './counterReducer'
function Counter2() {
    const [state, dispatch] = useReducer(CounterReducer, 0)
    return (
        <div>
            <h1>Counter 2 : {state} </h1>
            <button onClick={() => dispatch('INCREMENT')}>INCREMNET REDUCER</button>
        </div>
    )
}

export default Counter2
