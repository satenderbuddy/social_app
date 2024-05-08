import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    // Perform login logic here (e.g., API call)
    // For simplicity, let's just check if username and password are not empty
    if (username && password) {
      // Assume login successful, store user data in local storage or session storage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
      // Redirect to home page
      window.location.reload();
    } else {
      // Display error message or handle invalid login
      alert('Invalid username or password');
    }
  };

  render() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      return <Navigate to="/" />;
    }
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleLogin}>
          <div>
            <label>Username: </label>
            <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
          </div>
          <div>
            <label>Password: </label>
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
