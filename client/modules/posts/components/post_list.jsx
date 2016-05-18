import React from 'react';
import PostFeatured from './post_featured.jsx';
import PostTable from './post_table.jsx';

import {Table} from 'react-bootstrap';

class PostList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderFeaturedPosts() {
    const {posts} = this.props;
    return posts.map( (post) => (
      <PostFeatured key={post._id} post={post} />
    ));
  }

  renderAdminPosts() {
    const {posts} = this.props;
    return posts.map( (post) => (
      <PostTable key={post._id} post={post} />
    ));
  }

  render() {

    const {listtype} = this.props;

    return (
      <div>
        {listtype === 'featured' ? this.renderFeaturedPosts() :
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Author</th>
                <th>Excerpt</th>
                <th>CreatedAt</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
                {this.renderAdminPosts()}
            </tbody>
          </Table>
        }
      </div>
    );

  }
}

export default PostList;
