import React,{useReducer} from 'react'

const initialState = 0
const reducer = (state,action) => {
    switch (action) {
        case 'INCREMENT':
            return state+1
        case 'DECREMENT':
            return state-1
        case 'RESET':
            return initialState
        default:
            return state
    }
}

const CounterOne = () => {
    const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <div>Count- {count}</div>
        <button onClick={() => dispatch('INCREMENT')}>+1</button>
        <button onClick={() => dispatch('DECREMENT')}>-1</button>
        <button onClick={() => dispatch('RESET')}>Reset</button>
    </div>
  )
}

export default CounterOne