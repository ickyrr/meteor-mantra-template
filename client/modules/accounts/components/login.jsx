import React from 'react';
import ReactDOM from 'react-dom';
import {Col,Panel,FormGroup,FormControl,Button} from 'react-bootstrap';

class Login extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const {login} = this.props;
    const {username,password} = this.refs;
    const u = ReactDOM.findDOMNode(username).value;
    const p = ReactDOM.findDOMNode(password).value;
    login(u,p);
  }
  render() {
    return (
      <Col xs={12} sm={6} smOffset={3}>
        <Panel>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <h3>Login to access dashboard <i className="glyphicon glyphicon-lock"></i></h3>
            <FormGroup>
              <FormControl type="text" placeholder="Username or Email" ref="username"/>
            </FormGroup>

            <FormGroup>
              <FormControl type="password" placeholder="Password" ref="password"/>
            </FormGroup>

            <Button type="submit">Login</Button> &nbsp;
            <a href="/register">Create a new account</a>
          </form>
        </Panel>
      </Col>
    );
  }
}

export default Login;
