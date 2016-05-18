import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import Dashboard from '../components/dashboard.jsx';
import Post from '/lib/collections/posts.js';

export const composer = ({context}, onData) => {
  const {Meteor} = context();
  const subs = Meteor.subscribe('posts');
  if (subs.ready()) {
    const posts = Post.find().fetch();
    onData(null, {posts});
  }
};

export const depsMapper = (context) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Dashboard);
