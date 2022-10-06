import React, { useReducer } from 'react'
import CompA from './CompA'
import CompB from './CompB'
import CompC from './CompC'

export const CountContext = React.createContext()
const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        case 'RESET':
            return initialState
        default:
            return state
    }
}

const ReducerContext = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <CountContext.Provider
            value={{ countState: count, countDispatch: dispatch }}
        >
            <div>
                Count - {count}
                <CompA />
                <CompB />
                <CompC />
            </div>
        </CountContext.Provider>
    )
}

export default ReducerContext