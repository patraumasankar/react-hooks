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

const CounterThree = () => {
    const [count,dispatch] = useReducer(reducer,initialState)
    const [countTwo,dispatchTwo] = useReducer(reducer,initialState)
  return (
    <div>
        <div>Count- {count}</div>
        <button onClick={() => dispatch('INCREMENT')}>+1</button>
        <button onClick={() => dispatch('DECREMENT')}>-1</button>
        <button onClick={() => dispatch('RESET')}>Reset</button>
        <hr>
        </hr>
        <div>Count- {countTwo}</div>
        <button onClick={() => dispatchTwo('INCREMENT')}>+1</button>
        <button onClick={() => dispatchTwo('DECREMENT')}>-1</button>
        <button onClick={() => dispatchTwo('RESET')}>Reset</button>
    </div>
  )
}

export default CounterThree