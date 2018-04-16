import React, { Component } from 'react'
import { render } from 'react-dom'
class MyApp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      lastname: ''
    }
    this.handleName = this.handleName.bind(this)
    this.handlelastName = this.handlelastName.bind(this)
  }
  handleName (e) {
    this.setState({
      name: e.target.value
    })
  }
  handlelastName (e) {
    this.setState({
      lastname: e.target.value
    })
  }
  render () {
    return (
      <div>
        <h4>Formulario</h4>
        <div>
          <label htmlFor='name'>name</label>
          <input type='text' name='name' id='name' onChange={this.handleName} />
          <label htmlFor='lastname'>lastname</label>
          <input type='text' name='lastname' id='lastname' onChange={this.handlelastName} />
        </div>
        <div>{this.state.name} {this.state.lastname}</div>
      </div>
    )
  }
}

render(<MyApp />, document.getElementById('myApp'))
