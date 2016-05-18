import React from 'react';
import moment from 'moment';
import {PageHeader, Col} from 'react-bootstrap';

const PostSingle = ({post}) => (
  <div>
    <PageHeader>
      {post.title} <small>{post.author}</small>
      <br/>
      <small><i>{formatDate(post.createdAt)}</i></small>
    </PageHeader>
    <Col xs={12}>
      {post.content}
    </Col>
  </div>
);

const formatDate = (date) => {
  return moment(date).calendar();
};

export default PostSingle;
