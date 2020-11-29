import React, { useContext } from 'react'
import CounterContext from './CounterContext'
import Button from './Button'
import counterReducer from './counterReducer'
import Counter2 from './Counter2'

function Counter() {
    const context = useContext(CounterContext)
    return (
        <>
            <h1>Counter :: {context}</h1>
            <Button />
            <Counter2 />
        </>
    )
}
export default Counter

