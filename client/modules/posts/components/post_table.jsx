import React from 'react';
import {Table,Glyphicon} from 'react-bootstrap';
import moment from 'moment';

const PostTable = ({posts}) => (
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
         {posts ? posts.map( (post) => (
              <tr key={post._id}>
                <td>{post._id}</td>
                <td>{post.title}</td>
                <td>{post.author}</td>
                <td>{excerptize(post.content)}</td>
                <td>{formatDate(post.createdAt)}</td>
                <td>
                  <a href="#" title="Edit Post" className="btn btn-xs">
                    <Glyphicon glyph="pencil"></Glyphicon>
                  </a>
                  <a href="#" title="Delete Post" className="btn btn-xs">
                    <Glyphicon glyph="remove"></Glyphicon>
                  </a>
                  <a href="#" title="Unpublish Post" className="btn btn-xs">
                    <Glyphicon glyph="volume-off"></Glyphicon>
                  </a>
                </td>
              </tr>
          )) : 'No posts yet'
          }
        </tbody>
  </Table>
);

const formatDate = (date) => {
  return moment(date).calendar();
};

const excerptize = (content) => {
  return content.substring(0,200) + '...';
};

export default PostTable;
