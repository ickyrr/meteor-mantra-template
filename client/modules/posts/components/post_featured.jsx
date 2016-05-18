import React from 'react';
import {Col,Panel,Media} from 'react-bootstrap';
import moment from 'moment';

const PostFeatured = ({posts}) => (
  <div>
    {posts ? posts.map( (post) => (
      <Col xs={12} key={post._id}>
        <Panel>
          <Media>
            <Media.Left align="top">
              <img width={80} height={80} src={post.featured} alt="Image"/>
            </Media.Left>
            <Media.Body>
              <Media.Heading>
                {post.title} <small><i>{formatDate(post.createdAt)}</i></small>
              </Media.Heading>
              <p>{post.content}</p>
              <a href={`/post/${post._id}`} className="pull-right">Read more</a>
            </Media.Body>
          </Media>
        </Panel>
      </Col>
    )) : 'No posts yet'}
  </div>
);

const formatDate = (date) => {
  return moment(date).calendar();
};

export default PostFeatured;
