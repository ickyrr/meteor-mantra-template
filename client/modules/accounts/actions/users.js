import {Meteor} from 'meteor/meteor';
import User from '/lib/collections/users.js';

export default {
  register({LocalState,FlowRouter},username,email,password) {
    if (!username || !email || !password) {
      return LocalState.set('REGISTRATION_ERROR',
                            'Please make sure to fill up all fields on the form.');
    }

    LocalState.set('REGISTRATION_ERROR', null);

    const user = new User();
    const data = {
      username,
      services: {
        password: {
          bcrypt: password
        }
      },
      emails: [
        {address: email}
      ]
    };

    user.set(data);
    user.validate({}, function (err) {
      if (err) {
        return LocalState.set('REGISTRATION_ERROR', err);
      }

      user.save(function (err1) {
        if (err1) {
          return LocalState.set('REGISTRATION_ERROR', err1);
        }
        FlowRouter.go('/login');
      });

    });
  },
  login({FlowRouter,LocalState},username, password) {
    if (!username || !password) {
      return LocalState.set('LOGIN_ERROR', 'Please fill up all fields.');
    }
    LocalState.set('LOGIN_ERROR', null);

    Meteor.loginWithPassword(username,password, function (err) {
      if (err) {
        return LocalState.set('LOGIN_ERROR', err);
      }
      FlowRouter.go('/');
    });
  }

};
