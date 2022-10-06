import React, { useState } from 'react'

const HookCounterThree = () => {
    const [name, setName] = useState({ firstName: '', lastname: '' })
    return (
        <div>
            <input 
            type='text' 
            value={name.firstName} 
            onChange={e => setName({...name, firstName: e.target.value })} 
            />
            <input 
            type='text' 
            value={name.lastname} 
            onChange={e => setName({...name, lastname: e.target.value })} 
            />
            <h2>Your first name is {name.firstName}</h2>
            <h2>Your last name is {name.lastname}</h2>
            <h2>Your name is {JSON.stringify(name)}</h2>
        </div>
    )
}

export default HookCounterThree