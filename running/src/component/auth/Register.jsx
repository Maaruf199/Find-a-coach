import React, { Component } from "react";
import { Row, Form, Button, Container } from "react-bootstrap";

export default class Register extends Component {
  state = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  registerHandler = () => {
    //login here
    this.props.register(this.state);
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <div>
          <Container>
            <Row>
              <Form.Control
                name="firstname"
                type="text"
                placeholder="firstname"
                onChange={this.changeHandler}
              />
            </Row>
            <Row>
              <Form.Control
                name="lastname"
                type="text"
                placeholder="lastname"
                onChange={this.changeHandler}
              />
            </Row>
            <Row>
              <Form.Control
                name="email"
                type="email"
                placeholder="email"
                onChange={this.changeHandler}
              />
            </Row>
            <Row>
              <Form.Control
                name="password"
                type="password"
                placeholder="password"
                onChange={this.changeHandler}
              />
            </Row>
            <Button variant="primary" block onClick={this.registerHandler}>
              {" "}
              Register
            </Button>
          </Container>
        </div>
      </div>
    );
  }
}