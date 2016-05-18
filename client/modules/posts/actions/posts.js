import Post from '/lib/collections/posts.js';

export default {
  publishPost({LocalState,FlowRouter},title,content,author,image) {
    if (!title || !content || !author || !image) {
      return LocalState.set('POST_PUBLISH_ERROR','Please fill up all fields to post');
    }
    LocalState.set('POST_PUBLISH_ERROR', null);

    const post = new Post();
    const data = {
      title,
      content,
      author,
      featured: image
    };
    post.set(data);
    post.validate({}, function (err) {
      if (err) {
        return LocalState.set('POST_PUBLISH_ERROR', err);
      }
      post.save(function (err1) {
        if (err1) {
          return LocalState.set('POST_PUBLISH_ERROR',err1);
        }
        FlowRouter.go('/');
      });
    });
  },
  removePost({FlowRouter},id) {
    console.log('removing '+ id);
  }
};
