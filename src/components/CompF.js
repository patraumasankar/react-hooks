import React, { useContext } from 'react'
import { CountContext } from './ReducerContext'

const CompF = () => {
    const countContext = useContext(CountContext)
    return (
        <div>
            CompF - {countContext.countState}
            <button onClick={() => countContext.countDispatch('INCREMENT')}>+1</button>
            <button onClick={() => countContext.countDispatch('DECREMENT')}>-1</button>
            <button onClick={() => countContext.countDispatch('RESET')}>Reset</button>
        </div>
    )
}

export default CompF