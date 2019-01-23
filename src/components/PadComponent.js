import { operations, button_names } from '../actions';
import PropTypes from 'prop-types';
import React  from 'react';
import { Button } from 'fannypack';
import { Grid } from 'reakit'
import styled from 'styled-components';

const PadButton = styled(Button)`
    width: 100%;
    height: 70px;
    border: none;
    border-radius: 0px;
    &:focus{
        box-shadow: none;
    }
`;

const CalcButton = styled(PadButton)`
    background-color: rgb(247,247,247);
`;

const OperationButton = styled(PadButton)`
    background-color: rgb(133, 88, 215);
    color: white;
    &:hover{
        background-color: rgb(124, 78, 210);
    }
`;

const EqualsButton = styled(PadButton)`
    background-color: rgb(212, 67, 135);
    color: white;
    &:hover{
        background-color: rgb(203, 57, 130);
    }
`;

function Buttons(props){
    return(
        <Grid margin='auto' width='100%' height='100%'  backgroundColor = 'hsl(195, 100%, 95%)' dense borderRadius='2px' columns="repeat(4, 1fr)" autoRows="auto">
            {Object.keys(button_names).map(( name ) =>
                button_names[name] === button_names.ZERO ? <Grid.Item columnStart='2'><CalcButton onClick={() => props.onClickNumber(button_names[name])}>{button_names[name]}</CalcButton></Grid.Item> :
                <Grid.Item><CalcButton onClick={() => props.onClickNumber(button_names[name])}>{button_names[name]}</CalcButton></Grid.Item>
            )}
            {Object.keys(operations).map(( operation ) => (
                <Grid.Item columnStart="4" order='-1'><OperationButton onClick={() => props.onClickOperation(operations[operation].name)}>{operations[operation].symbol}</OperationButton></Grid.Item>
            ))}
            <Grid.Item><CalcButton onClick={() => props.onClickClear()}>CLR</CalcButton></Grid.Item>
            <Grid.Item columnStart='1' columnEnd='5'><EqualsButton onClick={() => props.onClickEquals()}>=</EqualsButton></Grid.Item> 
        </Grid>        
    )    
}

const NumbersPadComponent = ({ onClickNumber, onClickOperation, onClickClear, onClickEquals }) => (
    <Buttons onClickNumber={onClickNumber} onClickOperation={onClickOperation} onClickClear={onClickClear} onClickEquals={onClickEquals}/>
)

NumbersPadComponent.propTypes = {
    onClickNumber: PropTypes.func.isRequired,
    onClickOperation: PropTypes.func.isRequired,
    onClickEquals: PropTypes.func.isRequired,
    onClickClear: PropTypes.func.isRequired
}

export default NumbersPadComponent