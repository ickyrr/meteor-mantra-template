import React from 'react';
import {Col,Panel,Media,Table,Glyphicon} from 'react-bootstrap';
import PostFeatured from './post_featured';
import PostTable from './post_table';

class PostList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {listtype} = this.props;
    const {posts} = this.props;

    return (
      <div>
        {listtype === 'featured' ? <PostFeatured posts={posts}/> : <PostTable posts={posts}/>}
      </div>
    );
  }
}

export default PostList;
