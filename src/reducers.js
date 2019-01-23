import { combineReducers } from 'redux';
import { ENTER_FIRST_DIGIT, ENTER_SECOND_DIGIT, ENTER_OPERATION, PERFORM_CALCULATION, CLEAR_OPERATION, CLEAR_DIGITS, CLEAR_ANSWER, CLEAR_DATA, FLIP_CALCULATOR } from './actions';

function operation(state=null, action){
    switch (action.type){
        case ENTER_OPERATION:
            return action.operation;
        case CLEAR_OPERATION:
        case CLEAR_DATA:
            return null;
        default:
            return state;
    }
}

function digits(state={firstDigit: [], secondDigit: []}, action){
    switch(action.type){
        case ENTER_FIRST_DIGIT: 
            return {...state, firstDigit: [...state.firstDigit, `${action.digit}` ]}
        case ENTER_SECOND_DIGIT:
            return {...state, secondDigit: [...state.secondDigit, `${action.digit}`]}
        case CLEAR_DIGITS:
        case CLEAR_DATA:
            return {...state, firstDigit: [], secondDigit: []}
        default: return state;
    }
}

function answer(state=null, action){
    switch(action.type){
        case PERFORM_CALCULATION:
            return action.answer
        case CLEAR_ANSWER:
        case CLEAR_DATA:
            return null
        default: return state
    }
}

function flip(state=false, action){
    switch(action.type){
        case FLIP_CALCULATOR:
            return !state;
        default: return state
    }
}

const simpleCalculator = combineReducers({
    operation,
    digits,
    answer,
    flip
})

export default simpleCalculator;