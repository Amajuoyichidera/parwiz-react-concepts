import React from 'react'

function myStack(names) {
   return names.map( name =>
    <div key={name}>
        {`${name}`}
    </div>
      
   )
}

function Example(props) {
  return (
    <div>
        <h3>
            {myStack(props.names)}
        </h3>
    </div>
  )
}

export default Example