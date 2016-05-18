import React from 'react';
import {Glyphicon} from 'react-bootstrap';

import PostList from '/client/modules/posts/components/post_list.jsx';

const Dashboard = () => (
    <div>
      <header>
        <a href="/post-add" className="btn btn-primary"><Glyphicon glyph="plus"></Glyphicon> Add Post</a>
      </header>

      <main>
        <PostList listtype="table" />
      </main>
    </div>
);

export default Dashboard;
