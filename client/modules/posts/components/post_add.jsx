import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Col,Panel,FormGroup,FormControl,Button,Glyphicon,
        Image,ControlLabel,HelpBlock} from 'react-bootstrap';
import {ReactiveVar} from 'meteor/reactive-var';
const imgBinary = new ReactiveVar();

class PostAdd extends React.Component {
  handleSubmit(event) {
    event.preventDefault();

    const {publishPost} = this.props;
    const {title,content} = this.refs;
    const t = ReactDOM.findDOMNode(title).value;
    const c = ReactDOM.findDOMNode(content).value;
    const author = Meteor.userId();
    const featImg = imgBinary.get();

    publishPost(t,c,author,featImg);
  }
  convertToBinary() {
    const {featuredImg} = this.refs;
    const img = ReactDOM.findDOMNode(featuredImg);
    const imgData = img.files[0];

    const reader = new FileReader();

    reader.onload = function (e) {
      const binary = e.target.result;
      imgBinary.set(binary);
      $('#imgFeatured').attr('src', binary);
    };

    reader.readAsDataURL(imgData);
  }
  render() {
    return (
      <Col xs={12}>
        <Panel>
          <a href="/dashboard"><Glyphicon glyph="chevron-left"></Glyphicon> Back </a>
          <h1>Add Post</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup>
              <FormControl type="text" placeholder="Title" ref="title"/>
            </FormGroup>
            <FormGroup>
              <FormControl componentClass="textarea" rows="10" placeholder="Content" ref="content"/>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Featured Image</ControlLabel>
              <br />
              <div className="featured-img">
                <Image src="/assets/thumbnail.png" rounded id="imgFeatured"/>
              </div>
                <HelpBlock>Upload</HelpBlock>
                <FormControl type="file" onChange={this.convertToBinary.bind(this)}
                             ref="featuredImg"/>
            </FormGroup>
            <Button bsStyle="primary" type="submit">Publish</Button>
          </form>
        </Panel>
      </Col>
    );
  }
}

export default PostAdd;
