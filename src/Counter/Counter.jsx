import React from 'react';
import { useState } from 'react';
export default function Counter() {


    const [counter, setCounter] = useState(0)
    const [inputValue, setInputValue] = useState(1)
    return (
        <div>
            <h1 data-testid='heading-1'>Test Counter</h1>
            <h1  style={{ color: counter >=100 ? 'green' : 'black'}}data-testid='counter'>{counter}</h1>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'center'}}>
                <button onClick={(e) => {setCounter(counter-inputValue)}} data-testid='subBtn'>-</button>
                <input 
                style={{ textAlign: 'center' }} 
                type='number' 
                data-testid='input-value' 
                onChange={(e)=> {setInputValue(parseInt(e.target.value))}} 
                value={inputValue}/>
                <button onClick={(e) => {setCounter(counter + inputValue )}} data-testid='addBtn'>+</button>
            </div>
        </div>
    );
}

