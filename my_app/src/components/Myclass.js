import React, { Component } from 'react'

export class Myclass extends Component {
    

  render() {
    return (
      <div>
        <h2 className='mt-5 p-5 rounded mb-5 bg-primary text-white text-center'>My email address is {this.props.email} </h2>
        <button className='btn btn-primary'  onClick={this.props.myclick}>click me</button>
      </div>
    )
  }
}

export default Myclass