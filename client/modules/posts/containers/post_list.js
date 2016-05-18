import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import PostList from '../components/post_list.jsx';
import Post from '/lib/collections/posts.js';

export const composer = ({context}, onData) => {
  const posts = Post.find({},{sort: {createdAt: -1}}).fetch();
  onData(null, {posts});
};

export const depsMapper = (context) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(PostList);
