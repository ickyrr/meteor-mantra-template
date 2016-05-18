import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Navbar,Header,Brand,Nav,NavItem} from 'react-bootstrap';

class Navigation extends React.Component {
  logout() {
    const {FlowRouter} = this;
    Meteor.logout(function (error) {
      if (error) {
        throw new Meteor.Error(error.reason);
      }
      FlowRouter.go('/login');
    });
  }
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        {Meteor.userId() ?
        <Nav pullRight>
            <NavItem eventKey={1} href="/">Home</NavItem>
            <NavItem eventKey={2} href="/dashboard">Dashboard</NavItem>
            <NavItem eventKey={3} onClick={this.logout}>Logout</NavItem>
        </Nav> :
        <Nav pullRight>
            <NavItem eventKey={1} href="/">Home</NavItem>
            <NavItem eventKey={2} href="/register">Register</NavItem>
            <NavItem eventKey={3} href="/login">Login</NavItem>
        </Nav>
        }
      </Navbar>
    );
  }
}

export default Navigation;
