import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import PostAdd from '../components/post_add.jsx';

export const composer = ({context}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('POST_PUBLISH_ERROR');
  onData(null, {error});
};

export const depsMapper = (context, actions) => ({
  publishPost: actions.posts.publishPost,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(PostAdd);
