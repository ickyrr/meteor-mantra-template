import React from 'react';
import ReactDOM from 'react-dom';
import {Col,Panel,FormControl,Button} from 'react-bootstrap';

class Register extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const {register} = this.props;
    const {username,email,password} = this.refs;
    const u = ReactDOM.findDOMNode(username).value;
    const e = ReactDOM.findDOMNode(email).value;
    const p = ReactDOM.findDOMNode(password).value;

    register(u,e,p);
  }
  render() {
    return (
      <Col xs={12} sm={6} smOffset={3}>
          <Panel>
            <h3>Register <i className="glyphicon glyphicon-stats"></i></h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
              {/* <p className="msg-error">{usernameError ? usernameError : ''}</p> */}
              <FormControl type="text" placeholder="Username" ref="username"/>
              <div className="clearfix">&nbsp;</div>

              {/* <p className="msg-error">{usernameError ? emailError : ''}</p>*/}
              <FormControl type="email" placeholder="Email" ref="email"/>
              <div className="clearfix">&nbsp;</div>

              {/* <p className="msg-error">{usernameError ? passwordError : ''}</p>*/}
              <FormControl type="password" placeholder="Password" ref="password"/>
              <div className="clearfix">&nbsp;</div>

              <Button bsStyle="primary" type="submit">Register</Button>
            </form>
          </Panel>
      </Col>
    );
  }
}

export default Register;
