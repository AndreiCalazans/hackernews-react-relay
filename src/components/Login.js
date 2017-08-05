import React from 'react';
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants';
import SigninMutation from '../mutations/SigninMutation';
import CreateUserMutation from '../mutations/CreateUserMutation';

class Login extends React.Component {

  state = {
    login: true,
    email: '',
    password: '',
    name: '',
  }

  render() {
    
    return (
      <div>
        <h4>{this.state.login ? 'Login' : 'Sign Up'}</h4>
        <div>
          {!this.state.login &&
          <input
            type="text"
            value={this.state.name}
            onChange={(e) => this.setState({name: e.target.value })}
            placeholder="Your name"
          />}
          <input
            type="email"
            value={this.state.email}
            onChange={(e) => this.setState({email: e.target.value })}
            placeholder="Your email"
          />
          <input
            type="password"
            value={this.state.password}
            onChange={(e) => this.setState({password: e.target.value })}
            placeholder="Your password"
          />
        </div>
        <div>
          <button
            onClick={() => this.confirm()}
          >{this.state.login ? 'login' : 'create Account'}
          </button>

          <button
            onClick={() => this.setState({ login: !this.state.login })}
          >
            {this.state.login ? 'need to create an account ?': 'already have an account?'}
          </button>
        </div>
      </div>
    )
  }

  confirm = async () => {
    const { name, email, password } = this.state;
    if ( this.state.login) {
      SigninMutation(email, password, (id, token) => {
        this.saveUserData(id, token);
        this.props.history.push('/');
      })
    } else {
      CreateUserMutation(name, email, password, (id, token) => {
        this.saveUserData(id, token);
        this.props.history.push('/');
      })
    }
  }

  saveUserData = ( id, token) => {
    localStorage.setItem(GC_USER_ID, id);
    localStorage.setItem(GC_AUTH_TOKEN, token);
  }
}

export default Login;
