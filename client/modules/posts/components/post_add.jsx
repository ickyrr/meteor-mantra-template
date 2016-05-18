import React from 'react';
import {Col,Panel,FormGroup,FormControl,Button,Glyphicon,Image,ControlLabel} from 'react-bootstrap';

const PostAdd = () => (
  <Col xs={12}>
    <Panel>
      <a href="/dashboard"><Glyphicon glyph="chevron-left"></Glyphicon> Back </a>
      <h1>Add Post</h1>
      <form>
        <FormGroup>
          <FormControl type="text" placeholder="Title" />
        </FormGroup>
        <FormGroup>
          <FormControl componentClass="textarea" rows="10" placeholder="Content" />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Featured Image</ControlLabel>
          <br />
          <Image src="/assets/thumbnail.png" rounded />
        </FormGroup>
        <Button bsStyle="primary" type="submit">Publish</Button>
      </form>
    </Panel>
  </Col>
);

export default PostAdd;
