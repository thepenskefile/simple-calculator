import React from 'react';
import PropTypes from 'prop-types';
import { Paragraph, Flex, Block } from "fannypack";
import styled from 'styled-components';

const Display = styled(Paragraph)`
    font-family: digital-7;
    font-size: 60px;
    height: 100%;
    line-height: 100%;
    overflow: hidden;
    padding-top: 20px;
    margin-right: 5px;
`;

const ResultFlex = styled(Flex)`
    float: right;
    height: 100%;
`;

function DisplayFirstDigit( props ){
    if( (props.firstDigit.length>0) && (props.secondDigit.length===0) ){
        const numbers = (props.firstDigit).map((digit) => 
            <Display>{digit}</Display>
        );
        return <ResultFlex>{numbers}</ResultFlex>
    }
    else{
        return null;
    }
}

function DisplaySecondDigit( props ){
    if(props.secondDigit.length>0 && !props.result){
        const numbers = (props.secondDigit).map((digit) => 
            <Display>{digit}</Display>
        );
        return <ResultFlex>{numbers}</ResultFlex>
    }
    else{
        return null;
    }
}

function DisplayResult( props ){

    if(props.result){
        const resultArray = (props.result.toString()).split('');
        const result = (resultArray).map((digit) => 
            <Display>{digit}</Display>
        );
        return <ResultFlex>{result}</ResultFlex>
    }
    else{
        return null;
    }
    
}

const ResultComponent = ({ result, firstDigit, secondDigit }) =>  (
    <Block overflow='hidden' width='100%' height='100px' paddingRight='4px' margin='auto' borderRadius='2px' backgroundColor='black'>
        <DisplayFirstDigit firstDigit={firstDigit} secondDigit={secondDigit} />
        <DisplaySecondDigit secondDigit={secondDigit} result={result}/>
        <DisplayResult result={result}/>
    </Block>    
)

ResultComponent.propTypes = {
    result: PropTypes.number,
    firstDigit: PropTypes.array,
    secondDigit: PropTypes.array,
}

export default ResultComponent