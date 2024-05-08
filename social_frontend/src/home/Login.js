import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    // Perform login logic here (e.g., API call)
    // For simplicity, let's just check if email and password are not empty
    if (!email.trim() || !password.trim()) {
      alert('Please fill in all fields');
      return;
    }

    // If validation passed, you can proceed with login logic
    // For demonstration, let's just log the form data
    console.log('email:', email);
    console.log('Password:', password);

    // After successful login, you may redirect the user to another page
    // For example, redirect to home page
    this.props.history.push('/');
  };

  render() {
    return (
      <Container>
        <div className="login-form">
          <h2>Login</h2>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Form.Group>
            <br/>
            <Button variant="primary" type="submit" block>
              Login
            </Button>
            
            <Button variant="link"  href='/sign-up'>SignUp</Button>
            <Button variant="link"  href='/forgot-password'>Forgot Password</Button>
          </Form>
        </div>
      </Container>
    );
  }
}

export default Login;
