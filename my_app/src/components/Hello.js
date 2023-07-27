import React from 'react'

function Hello(props) {
    function Clickme() {
        alert('button clicked')
    }
  return (
    <div>
        <h1>Hello {props.name}</h1>
        <button className='btn btn-success' onClick={Clickme}>Click Me</button>
    </div>
  )
}

export default Hello