import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import PostList from './components/post_list.jsx';
import PostAdd from './components/post_add.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'postlist',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<PostList listtype="featured" />)
      });
    }
  });
  FlowRouter.route('/post-add', {
    name: 'postadd',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<PostAdd />)
      });
    }
  });
}
