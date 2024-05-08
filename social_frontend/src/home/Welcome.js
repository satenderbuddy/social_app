import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Container className="text-center mt-5 mx-auto">
      <h1>Welcome to Social App!</h1>
      
      <Button as={Link} to="/login" variant="primary" className="mr-2">Login</Button>
      <dd/>
      <Button as={Link} to="/create-account" variant="secondary">Create Account</Button>
    </Container>
  );
}

export default Welcome;
