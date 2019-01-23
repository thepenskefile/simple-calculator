import { connect } from 'react-redux'
import { flipCalculator } from '../actions'
import React, { Component}  from 'react';
import { bindActionCreators } from 'redux';
import FlipCalculatorComponent from '../components/FlipCalculatorComponent'

const mapStateToProps = function(state) {
    return {
        flip: state.flip
    }
}

const mapDispatchToProps = function (dispatch) {
    return bindActionCreators({
        flipCalculator: flipCalculator        
    }, dispatch)      
}

class FlipCalculatorContainer extends Component {

    onClick = () => {
        this.props.flipCalculator(!this.props.flip);
    }
    
    render() {
        const { flipCalculator } = this.props
        return(
            <FlipCalculatorComponent onClick={flipCalculator}/>
        )
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(FlipCalculatorContainer);