import React, { Component } from 'react'

class Form extends Component {
   
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         password: '',
      }
    }
    
    componentDidMount() {
        this.setState({username: 'David'})
    }

    usernameHandler = (event) => {
        this.setState({
            username:event.target.value
        })
    }

    passwordHandler = (event) => {
        this.setState({
            password:event.target.value
        })
    }

  render() {
    return (
      <div className='container'>
        <input type='text' value={this.state.username} placeholder='Enter Your username' className='form-control' onChange={this.usernameHandler} />
        <input type='password' value={this.state.password} placeholder='Enter Your password' className='form-control' onChange={this.passwordHandler} />
        <button className='btn btn-primary'>Click Me</button>
       </div>
    )
  }
}

export default Form