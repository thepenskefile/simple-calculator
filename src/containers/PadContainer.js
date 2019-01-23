import { connect } from 'react-redux'
import { enterOperation, enterFirstDigit, enterSecondDigit, performCalculation, operations, clearOperation, clearDigits, clearAnswer, clearData } from '../actions'
import React, { Component}  from 'react'
import { bindActionCreators } from 'redux';
import NumbersPadComponent from '../components/PadComponent';

const mapStateToProps = function ( state ) {
    return {
        operation: state.operation,
        firstDigit: state.digits.firstDigit,
        secondDigit: state.digits.secondDigit
    }
}

const mapDispatchToProps = function ( dispatch ) {
    return bindActionCreators({
        enterOperation: enterOperation,
        enterFirstDigit: enterFirstDigit,
        enterSecondDigit: enterSecondDigit,
        performCalculation: performCalculation,
        clearOperation: clearOperation,
        clearDigits: clearDigits,
        clearAnswer: clearAnswer,
        clearData: clearData
    }, dispatch)
}

class PadContainer extends Component {    

    getOperation = ( operation ) => {
        switch(operation){
            case operations.ADDITION.name:
                this.props.enterOperation(operations.ADDITION.name);
                break;
            case operations.SUBTRACTION.name:
                this.props.enterOperation(operations.SUBTRACTION.name);
                break;
            case operations.MULTIPLICATION.name:
                this.props.enterOperation(operations.MULTIPLICATION.name);
                break;
            case operations.DIVISION.name:
                this.props.enterOperation(operations.DIVISION.name);
                break;
            default:                
        }           
    }

    getDigits = ( value ) => {
        const { operation } = this.props;
        this.clearAnswer();
        if(operation==null){
            this.props.enterFirstDigit(value);
        }
        else{
            this.props.enterSecondDigit(value);
        }
    }

    onClickEquals = async () => {
        await this.calculateAnswer();
        await this.clearOperation();
        await this.clearDigits();
    }

    onClickClear = async () => {
       await this.props.clearData();
    }

    calculateAnswer = () => {
        const { firstDigit, secondDigit, operation } = this.props;       
        var first = '';
        var second = '';
        for(var i=0; i<firstDigit.length; i++){
            first += firstDigit[i];
        }
        for(i=0; i<secondDigit.length; i++){
            second += secondDigit[i];
        }
        first = parseFloat(first);
        second = parseFloat(second);

        switch(operation){
            case operations.ADDITION.name:
                this.props.performCalculation(first + second);
                break;
            case operations.SUBTRACTION.name:
                this.props.performCalculation(first - second);
                break;
            case operations.MULTIPLICATION.name:
                this.props.performCalculation(first * second);
                break;
            case operations.DIVISION.name:
                this.props.performCalculation(first / second);
                break;
            default: 
        }
    }

    clearOperation = () => {
        this.props.clearOperation();
    }

    clearDigits = () => {
        this.props.clearDigits();
    }

    clearAnswer = () => {
        this.props.clearAnswer();
    }

    render() {
        return (
            <div>
                <NumbersPadComponent onClickNumber={this.getDigits} onClickOperation={this.getOperation} onClickEquals={this.onClickEquals} onClickClear={this.onClickClear}/>
            </div>            
        )
    }   
}
export default connect(mapStateToProps, mapDispatchToProps)(PadContainer);


