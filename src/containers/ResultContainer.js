import { connect } from 'react-redux'
import React, { Component}  from 'react';
import ResultComponent from '../components/ResultComponent'

const mapStateToProps = function(state) {
    return {
        firstDigit: state.digits.firstDigit,
        secondDigit: state.digits.secondDigit,
        answer: state.answer
    }
}

class ResultContainer extends Component {    
    render() {
        const { answer, firstDigit, secondDigit } = this.props
        return(
            <ResultComponent firstDigit={firstDigit} secondDigit={secondDigit} result={answer}/>
        )
    }
}

export default connect(mapStateToProps)(ResultContainer);