import { connect } from 'react-redux'
import { enterFirstDigit, enterSecondDigit } from '../actions'
import React, { Component }  from 'react'
import { bindActionCreators } from 'redux';
import DigitInputsComponent from '../components/DigitInputsComponent'

const mapDispatchToProps = function (dispatch) {
    return bindActionCreators({
        enterFirstDigit: enterFirstDigit,
        enterSecondDigit: enterSecondDigit
    }, dispatch)      
}

class DigitInputsContainer extends Component {

    handleOnChangeFirstDigit = ({ target }) => {
        this.props.enterFirstDigit(parseFloat(target.value));
    }

    handleOnChangeSecondDigit = ({ target }) => {
        this.props.enterSecondDigit(parseFloat(target.value));
    }

    render() {
        return (
            <DigitInputsComponent onChangeFirstDigit = {this.handleOnChangeFirstDigit} onChangeSecondDigit = {this.handleOnChangeSecondDigit}/>
        )
    }
}

export default connect(undefined, mapDispatchToProps)(DigitInputsContainer);
