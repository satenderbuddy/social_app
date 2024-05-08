import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {

    return (
      <Navbar className="navbar navbar-light">
        <Navbar.Brand href="/">Social Media</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        {this.props.isLoggedIn ? (
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/messages">Messages</Nav.Link>
            <Nav.Link as={Link} to="/notifications">Notifications</Nav.Link>
            <Nav.Link as={Link} to="/settings">Settings</Nav.Link>
          </Nav>
        ):null}

          <Nav me-auto>
            {this.props.isLoggedIn ? (
              <Nav.Link as={Link} to="/logout" >Logout</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login"  ><b>Login</b></Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
