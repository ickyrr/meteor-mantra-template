import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Navbar,Header,Brand,Nav,NavItem} from 'react-bootstrap';

class Navigation extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="/">Home</NavItem>
          <NavItem eventKey={2} href="/dashboard">Dashboard</NavItem>
          <NavItem eventKey={3} href="/register">Register</NavItem>
          <NavItem eventKey={4} href="/login">Login</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
