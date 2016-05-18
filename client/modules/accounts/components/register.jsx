import React from 'react';
import {Col,Panel,FormControl,Button} from 'react-bootstrap';

class Register extends React.Component {
  render() {
    return (
      <Col xs={12} sm={6} smOffset={3}>
          <Panel>
            <h3>Register <i className="glyphicon glyphicon-stats"></i></h3>
            <form>
              {/* <p className="msg-error">{usernameError ? usernameError : ''}</p> */}
              <FormControl type="text" placeholder="Username" ref="username"/>
              <div className="clearfix">&nbsp;</div>

              {/* <p className="msg-error">{usernameError ? emailError : ''}</p>*/}
              <FormControl type="email" placeholder="Email" ref="email"/>
              <div className="clearfix">&nbsp;</div>

              {/* <p className="msg-error">{usernameError ? passwordError : ''}</p>*/}
              <FormControl type="password" placeholder="Password" ref="password"/>
              <div className="clearfix">&nbsp;</div>

              <Button bsStyle="primary" type="submit">Sign up</Button>
            </form>
          </Panel>
      </Col>
    );
  }
}

export default Register;
