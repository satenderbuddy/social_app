import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    isFormVisible: false
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  
  validateEmail = (e) =>{
    var email = document.getElementById("email").value
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g; // eslint-disable-line

    if(e.target?.value && e.target.value.match(isValidEmail)){
      console.log("here")
      alert("Invalid Email")
      // setInput(e.target.value)
    }else{
      alert("Invalid Email")
      }
    console.log(email)
    // this.validateOtp(e)
  }
  validateOtp = (e) => {
    // check otp and make form visible
    this.setState({isFormVisible:true})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = this.state;

    // Perform validation
    if (!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // If validation passed, you can proceed with account creation logic
    // For demonstration, let's just log the form data
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // After successful account creation, you may redirect the user to another page
    // For example, redirect to login page
    this.props.history.push('/login');
  };

  render() {
    const isFormVisible = this.state.isFormVisible
    return (
      <div>
        <h2>Create Account</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          {isFormVisible?(
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          ):null}
          {isFormVisible?(
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          ):null}
          {isFormVisible?(
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          ):null}
          <br/>
          {isFormVisible?(
          <Button variant="primary" type="submit">
            Create Account
          </Button>
          ):null}
        
        {isFormVisible?null:(
        <Button variant="primary" type="button" onClick={this.validateEmail}>
            Enter
          </Button>)}
        </Form>

      </div>
    );
  }
}

export default SignUp;
