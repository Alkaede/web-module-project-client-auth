import React from 'react';
import { axiosAuth } from '../utils/axiosAuth';

class Login extends React.Component{
  // setting state with credentials for user auth later used in axios auth
  state = {
    credentials: {
      username: '',
      password: '',
    }
  }
    
  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  login = e => {
    e.preventDefault();
    axiosAuth().post('/login', this.state.credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/protected') //this is for when I setup a protected paage
      })
      .catch(err => console.error('unable to login: ', err));
  }

  render(){
    return(
      <div>
        <form onSubmit={this.login}>
          <input
            type='text'
            name='username'
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type='password'
            name='password'
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    )
  }
}

export default Login;