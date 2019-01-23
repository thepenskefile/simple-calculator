import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import simpleCalculator from './reducers'
import App from './components/App'
import { ThemeProvider, Box } from 'fannypack';
import './App.css';

const store = createStore(simpleCalculator);

render(
    <Provider store={store}>
        <ThemeProvider>
            <Box marginTop='50px' marginBottom='50px'>
                <App/>
            </Box>
        </ThemeProvider>        
    </Provider>,
  document.getElementById('root')
)
