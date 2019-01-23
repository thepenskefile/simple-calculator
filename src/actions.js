//Action types

export const ENTER_FIRST_DIGIT = 'ENTER_FIRST_DIGIT';
export const ENTER_SECOND_DIGIT = 'ENTER_SECOND_DIGIT';
export const CLEAR_DIGITS = 'CLEAR_DIGITS';
export const ENTER_OPERATION = 'ENTER_OPERATION';
export const CLEAR_OPERATION = 'CLEAR_OPERATION';
export const PERFORM_CALCULATION = 'PERFORM_CALCULATION';
export const CLEAR_ANSWER = 'CLEAR_ANSWER';
export const CLEAR_DATA = 'CLEAR_DATA';
export const FLIP_CALCULATOR = 'FLIP_CALCULATOR';

//other constants

export const operations = {
    ADDITION: { name:'ADDITION', symbol: '+' },
    SUBTRACTION: { name: 'SUBTRACTION', symbol: '-' },
    MULTIPLICATION: { name: 'MULTIPLICATION', symbol: '*' },
    DIVISION: { name: 'DIVISION', symbol: '/' }
}

export const button_names = {
    ONE: '1',
    TWO: '2',
    THREE: '3',
    FOUR: '4',
    FIVE: '5',
    SIX: '6',
    SEVEN: '7',
    EIGHT: '8',
    NINE: '9',
    ZERO: '0',
    DECIMAL: '.'
}

//action creators

export function enterFirstDigit(digit) {
    return {type: ENTER_FIRST_DIGIT, digit}
}

export function enterSecondDigit(digit) {
    return {type: ENTER_SECOND_DIGIT, digit}
}

export function clearDigits(digit){
    return {type: CLEAR_DIGITS}
}

export function enterOperation(operation) {
    return {type: ENTER_OPERATION, operation}
}

export function performCalculation(answer) {
    return {type: PERFORM_CALCULATION, answer}
}

export function clearOperation() {
    return {type: CLEAR_OPERATION}
}

export function clearAnswer() {
    return {type: CLEAR_ANSWER}
}

export function clearData() {
    return {type: CLEAR_DATA}
}

export function flipCalculator() {
    return {type: FLIP_CALCULATOR}
}