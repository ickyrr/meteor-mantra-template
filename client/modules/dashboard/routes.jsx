import React from 'react';
import {mount} from 'react-mounter';
import {Meteor} from 'meteor/meteor';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import Dashboard from './containers/dashboard.js';


export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  const ifLoggedIn = FlowRouter.group({
    triggersEnter: [
      function () {
        if (!Meteor.userId()) {
          return FlowRouter.go('/login');
        }
      }
    ]
  });

  ifLoggedIn.route('/dashboard', {
    name: 'dashboard',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Dashboard />)
      });
    }
  });
}
