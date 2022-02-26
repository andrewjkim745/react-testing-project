import React from 'react'
import Counter from '../Counter'
import { fireEvent, getByText, render, screen } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"


test('header renders with correct text', ()=> {
    const { getByTestId } = render(<Counter/>)
    const headerElement = getByTestId('heading-1')


    expect(headerElement.textContent).toBe('Test Counter')
})



test('counter initially starts with text at 0', () => {
    const { getByTestId } = render(<Counter/>)
    const counterElement = getByTestId('counter')


    expect (counterElement.textContent).toBe('0')
})


test('counter input renders with value 1', () => {
    const { getByTestId } = render(<Counter/>)
    const input = getByTestId('input-value')

    expect (input.value).toBe('1')
})


test('counter add button renders with +', () => {
    const {getByTestId} = render(<Counter/>)
    const addBtn = getByTestId('addBtn')
    expect(addBtn.textContent).toBe('+')
})

test('counter subtract button renders with -', () => {
    const { getByTestId } = render(<Counter/>)
    const subBtn = getByTestId('subBtn')
    expect(subBtn.textContent).toBe('-')
})


test('input value changes correctly', () => {
    const { getByTestId } = render(<Counter/>)
    const inputElement = getByTestId('input-value')

    fireEvent.change(inputElement, {
        target: {
            value: "5"
        }
    })

    expect(inputElement.value).toBe("5")
})


test('add button adds 1 to counter value correctly', () => {
    const { getByTestId } = render(<Counter/>)
    const addBtn = getByTestId('addBtn')
    const counterElement = getByTestId('counter')

    fireEvent.click(addBtn);

    expect(counterElement.textContent).toBe('1')
})

test('subtract button subtracts 1 from counter value correctly', () => {
    const { getByTestId } = render(<Counter/>)
    const subBtn = getByTestId('subBtn')
    const counterElement = getByTestId('counter')

    fireEvent.click(subBtn);

    expect(counterElement.textContent).toBe('-1')
})


test('adding and subtracting multiple times renders the correct counter value', () => {
    const { getByTestId } = render(<Counter/>)
    const subBtn = getByTestId('subBtn')
    const addBtn = getByTestId('addBtn')
    const counterElement = getByTestId('counter')
    const inputElement = getByTestId('input-value')

    fireEvent.change(inputElement, {
        target: {
            value: "5"
        }
    })

    expect(inputElement.value).toBe("5")


    for (let i = 0 ; i <= 5; i++) {
        fireEvent.click(addBtn)
    }
    fireEvent.click(subBtn)

    expect(counterElement.textContent).toBe("25")


})



test('counter renders with correct className and changes green when hit 100', () => {
    const { getByTestId } = render(<Counter/>)
    const counterElement = getByTestId('counter')
    const inputElement = getByTestId('input-value')
    const addBtn = getByTestId('addBtn')
    const subBtn = getByTestId('subBtn')

    expect(counterElement.className).toBe('');


    fireEvent.change(inputElement, {
        target: {
            value: "10"
        }
    })
    expect(counterElement.className).toBe('');

    for (let i = 0 ; i < 10; i++) {
        fireEvent.click(addBtn)
    }

    expect(counterElement).toHaveStyle(`color: green`)
    console.log('value of counterElement', counterElement.textContent)
    
    fireEvent.click(subBtn)
    fireEvent.click(subBtn)

    expect(counterElement).toHaveStyle(`color: black`)

    
})


test('counter className changes on button click', () => {
    const { getByTestId } = render(<Counter/>)
    const counterElement = getByTestId('counter')

    expect(counterElement.className).toBe('');
})