import React from 'react';
import { useState } from 'react';
export default function Counter() {


    const [counter, setCounter] = useState(0)
    const [inputValue, setInputValue] = useState(1)
    return (
        <div>
            <h1 data-testid='heading-1'>Test Counter</h1>
            <h1 data-testid='counter'>{counter}</h1>
            <div style={{ display: 'flex'}}>
                <button data-testid='subBtn'>-</button>
                <input 
                style={{ textAlign: 'center' }} 
                type='number' 
                data-testid='input-value' 
                onChange={(e)=> {setInputValue(e.target.value)}} 
                value={inputValue}/>
                <button data-testid='addBtn'>+</button>
            </div>
        </div>
    );
}

