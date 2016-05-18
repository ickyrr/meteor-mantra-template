import React from 'react';
import {Col,Panel,Row,Media} from 'react-bootstrap';

class PostFeatured extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Col xs={12}>
        <Panel>
          <Media>
            <Media.Left align="top">
              <img width={100} height={100} src="/assets/thumbnail.png" alt="Image"/>
            </Media.Left>
            <Media.Body>
              <Media.Heading>
                Post Title <small><i>Post createdAt</i></small>
              </Media.Heading>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
              <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              <a href="#" className="pull-right">Read more</a>
            </Media.Body>
          </Media>
        </Panel>
      </Col>
    );
  }
}

export default PostFeatured;
