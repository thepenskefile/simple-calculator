import ResultContainer from '../containers/ResultContainer'
import FlipCalculatorContainer from '../containers/FlipCalculatorContainer'
import PadContainer from '../containers/PadContainer';
import { Container, Box } from 'fannypack'
import { connect } from 'react-redux'
import React, { Component }  from 'react';

const mapStateToProps = function(state) {
  return {
    flip: state.flip
  }
}

class App extends Component {
  render(){
    const { flip } = this.props;
    return (
      <div>
        <Container width='300px' borderRadius='2px' backgroundColor='hsl(210, 16%, 82%)' className={(flip ? 'showFlip' : 'hideFlip')}>
          <ResultContainer/>
          <PadContainer/>
        </Container>
        <Box width='100px' margin='auto' padding='10px'>
          <FlipCalculatorContainer/>
        </Box>
      </div>
    )
  }
}

export default connect(mapStateToProps)(App);