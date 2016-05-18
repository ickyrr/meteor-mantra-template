import React from 'react';
import PostFeatured from './post_featured.jsx';
import PostTable from './post_table.jsx';

class PostList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {posts} = this.props;

    const {listtype} = this.props;
    if (listtype === 'featured') {
      return (
          <PostFeatured posts={posts} />
        );
    }
    if (listtype === 'table') {
      return (
          <PostTable posts={posts} />
      );
    }

  }
}

export default PostList;
