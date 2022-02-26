import React from 'react'
import Counter from '../Counter'
import { fireEvent, render, screen } from '@testing-library/react'
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




