import React from 'react';
import PropTypes from 'prop-types';

const DigitInputsComponent = ({ onChangeFirstDigit, onChangeSecondDigit }) =>  (
    <div>
        <input placeholder='Enter first digit' type="number" onChange={onChangeFirstDigit}/>
        <input placeholder='Enter second digit' type="number" onChange={onChangeSecondDigit}/>
    </div>    
)

DigitInputsComponent.propTypes = {
    onChangeFirstDigit: PropTypes.func.isRequired,
    onChangeSecondDigit: PropTypes.func.isRequired
}

export default DigitInputsComponent