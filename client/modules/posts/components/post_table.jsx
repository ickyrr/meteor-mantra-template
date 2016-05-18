import React from 'react';
import {Table,Glyphicon} from 'react-bootstrap';
import moment from 'moment';

class PostTable extends React.Component {
  formatDate(date) {
    return moment(date).calendar();
  }
  render() {
    const {post} = this.props;
    return (
      <tr>
        <td>{post._id}</td>
        <td>{post.title}</td>
        <td>{post.author}</td>
        <td>{post.content}</td>
        <td>{this.formatDate(post.createdAt)}</td>
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
    );
  }
}

export default PostTable;
