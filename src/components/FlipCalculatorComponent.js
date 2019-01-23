import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'fannypack';

const ResultComponent = ({ onClick }) =>  (
    <Button borderRadius='2px' onClick={() => onClick()} >Flip!</Button>
)

ResultComponent.propTypes = {
    onClick: PropTypes.func
}

export default ResultComponent