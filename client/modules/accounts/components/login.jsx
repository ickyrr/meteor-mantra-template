import React from 'react';
import {Col,Panel,FormGroup,FormControl,Button} from 'react-bootstrap';

class Login extends React.Component {
  render() {
    return (
      <Col xs={12} sm={6} smOffset={3}>
        <Panel>
          <form>
            <h3>Login to access dashboard <i className="glyphicon glyphicon-lock"></i></h3>
            <FormGroup>
              <FormControl type="text" placeholder="Username or Email" ref="username"/>
            </FormGroup>

            <FormGroup>
              <FormControl type="password" placeholder="Password" ref="password"/>
            </FormGroup>

            <Button type="submit">Login</Button>
          </form>
        </Panel>
      </Col>
    );
  }
}

export default Login;
