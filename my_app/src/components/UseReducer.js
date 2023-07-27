import React, {useReducer} from 'react'

const initialState = {count:0}
const reducer = (state, action) => {
    switch(action.type) {
        case 'increment' :
            return {count:state.count + 1}

        case 'decrement' :
            return {count:state.count - 1}
    }
}

function UseReducer() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <h2> Count : {state.count} </h2>
        <button onClick={() => dispatch({type:'increment'})} className='btn btn-primary'>Increment</button>
        <button  onClick={() => dispatch({type:'decrement'})} className='btn btn-primary'>Decrement</button>
    </div>
  )
}

export default UseReducer 