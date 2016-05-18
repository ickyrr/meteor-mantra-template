import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import PostList from './containers/post_list.js';
import PostAdd from './containers/post_add.js';
import PostSingle from './containers/post_single.js';

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
  FlowRouter.route('/post/:postId', {
    name: 'postsingle',
    action({postId}) {
      mount(MainLayoutCtx, {
        content: () => (<PostSingle postId={postId}/>)
      });
    }
  });
}
