import React, { useContext } from 'react'
import { CountContext } from './ReducerContext'

const CompD = () => {
    const countContext = useContext(CountContext)
    return (
        <div>
            CompD - {countContext.countState}
            <button onClick={() => countContext.countDispatch('INCREMENT')}>+1</button>
            <button onClick={() => countContext.countDispatch('DECREMENT')}>-1</button>
            <button onClick={() => countContext.countDispatch('RESET')}>Reset</button>
        </div>
    )
}

export default CompD