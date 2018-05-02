import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'

class Greeter extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="Greetings"
        />
        <h2>Thanks for using this framework</h2>
      </div>
    )
  }
}

export default Greeter