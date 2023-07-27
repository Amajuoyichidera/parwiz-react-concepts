import React, { Component } from 'react'

export class Name extends Component {
    constructor() {
        super()
        this.state = {
            name: 'cruz'
        }
    }

    click = () => {
        this.setState({
            name: this.state.name === 'cruz' ? 'david' : 'cruz'
        })
    }

  render() {
    return (
      <div>
        <h1 className='text-center'>{this.state.name}</h1>
        <button onClick={this.click} className='btn btn-danger'>Change Text</button>
       </div>
    )
  }
}

export default Name