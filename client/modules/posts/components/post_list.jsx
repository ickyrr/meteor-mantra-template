import React from 'react';

import PostFeatured from './post_featured';
import PostTable from './post_table';

class PostList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {listtype} = this.props;

    return (
      <div>
        {listtype === 'featured' ? <PostFeatured /> : <PostTable />}
      </div>
    );
  }
}

export default PostList;
