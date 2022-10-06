import React, { useContext } from 'react'
import { CountContext } from './ReducerContext'

const CompA = () => {
    const countContext = useContext(CountContext)
    return (
        <div>
            CompA - {countContext.countState}
            <button onClick={() => countContext.countDispatch('INCREMENT')}>+1</button>
            <button onClick={() => countContext.countDispatch('DECREMENT')}>-1</button>
            <button onClick={() => countContext.countDispatch('RESET')}>Reset</button>
        </div>
    )
}

export default CompA