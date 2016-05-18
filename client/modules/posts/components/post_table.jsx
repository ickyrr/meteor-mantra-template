import React from 'react';
import {Table,Glyphicon} from 'react-bootstrap';

class PostTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
          <tr>
            <td>1</td>
            <td>title</td>
            <td>author</td>
            <td>Cras sit amet nibh libero, in gravida nulla.
                Nulla vel metus scelerisque ante sollicitudin commodo...</td>
            <td>date</td>
            <td>
              <a href="#" title="Edit Post" className="btn btn-xs"><Glyphicon glyph="pencil"></Glyphicon></a>
              <a href="#" title="Delete Post" className="btn btn-xs"><Glyphicon glyph="remove"></Glyphicon></a>
              <a href="#" title="Unpublish Post" className="btn btn-xs"><Glyphicon glyph="volume-off"></Glyphicon></a>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default PostTable;
