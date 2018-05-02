import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './static/main.css'
import Greeter from './greeter'

const App = () => (
  <MuiThemeProvider>
    <Greeter/>
  </MuiThemeProvider>
)

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)