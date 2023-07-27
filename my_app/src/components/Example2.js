import React, { Component } from 'react'

class Example2 extends Component {

    myStack(names) {
        return names.map( name =>
         <div key={name}>
             {`${name}`}
         </div>
           
        )
     }

  render() {
    return (
      <div>
        <h3>
            {this.myStack(this.props.names)}
        </h3>
      </div>
    )
  }
}

export default Example2