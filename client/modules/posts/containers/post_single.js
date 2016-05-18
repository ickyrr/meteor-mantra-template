import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import PostSingle from '../components/post_single.jsx';
import Post from '/lib/collections/posts.js';

export const composer = ({context, postId}, onData) => {
  const {Meteor} = context();
  const subs = Meteor.subscribe('posts', postId);
  if (subs.ready()) {
    const post = Post.findOne(postId);
    onData(null, {post});
  }
};

export const depsMapper = (context) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(PostSingle);
