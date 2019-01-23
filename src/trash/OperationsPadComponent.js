import PropTypes from 'prop-types';
import { operations } from '../actions';
import React  from 'react';
import { Button } from 'fannypack';
import { Grid } from 'fannypack'
import styled from 'styled-components';

const OperationButton = styled(Button)`
  width: 60px;
  height: 60px;  
`;

const OperationsPadComponent = ({onClickOperation, onClickEquals, onClickClear}) => (
    <Grid columns="repeat(3, 0fr)" autoRows="auto" gap="1vw">
        <Grid.Item>
            <OperationButton onClick={() => onClickOperation(operations.ADDITION)}>+</OperationButton>
        </Grid.Item>
        <Grid.Item>
            <OperationButton onClick={() => onClickOperation(operations.SUBTRACTION)}>-</OperationButton>
        </Grid.Item>
        <Grid.Item>
            <OperationButton onClick={() => onClickOperation(operations.MULTIPLICATION)}>*</OperationButton>
        </Grid.Item>
        <Grid.Item>
            <OperationButton onClick={() => onClickOperation(operations.DIVISION)}>/</OperationButton> 
        </Grid.Item>
        <Grid.Item>
            <OperationButton onClick={() => onClickClear()}>CLR</OperationButton>
        </Grid.Item>
        <Grid.Item>
            <OperationButton onClick={() => onClickEquals()}>=</OperationButton>        
        </Grid.Item>        
    </Grid>        
)

OperationsPadComponent.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEquals: PropTypes.func.isRequired,
    onClickClear: PropTypes.func.isRequired
}

export default OperationsPadComponent