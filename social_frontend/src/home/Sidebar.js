import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <h2>Sidebar</h2>
        <Nav className="flex-column">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          <Nav.Link as={Link} to="/messages">Messages</Nav.Link>
          <Nav.Link as={Link} to="/notifications">Notifications</Nav.Link>
          <Nav.Link as={Link} to="/settings">Settings</Nav.Link>
        </Nav>
      </div>
    );
  }
}

export default Sidebar;
