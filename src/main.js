import React, { Component } from 'react'
import { render } from 'react-dom'
class MyApp extends Component {
  render () {
    return (
      <div>Hello universe</div>
    )
  }
}

render(<MyApp />, document.getElementById('myApp'))
