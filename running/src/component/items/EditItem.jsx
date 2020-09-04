import React, { Component } from "react";
import { Form, Button, Row } from "react-bootstrap";

export default class EditItem extends Component {
  state = {
    name: this.props.item.name,
    picture: this.props.item.picture,
    text: this.props.item.text,
  };

  changeHandler = (e) => {
    console.log("I am editing the: ", e.target.name);
    //allow a re render in item.jsx
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = () => {
    this.props.editItem(this.state, this.props.item._id);
  };

  render() {
    let { name, picture, text } = this.state;
    return (
      <div>
        <h1>Edit Profile</h1>
        <div>
          <Row>
            <Form.Control
              name="name"
              value={name}
              onChange={this.changeHandler}
            />
          </Row>
          <Row>
            <Form.Control
              name="picture"
              value={picture}
              onChange={this.changeHandler}
            />
          </Row>
          <Row>
            <Form.Control
              name="text"
              value={text}
              onChange={this.changeHandler}
            />
          </Row>
          <Button onClick={this.submitHandler}>Submit</Button>
        </div>
      </div>
    );
  }
}