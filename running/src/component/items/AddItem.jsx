import React, { Component } from "react";
import { Form, Button, Row, Card, Container, Col } from "react-bootstrap";
import Axios from "axios";
import { Redirect } from "react-router-dom";

const URL = process.env.REACT_APP_URL;
class AddItem extends Component {
  state = {
    name: "",
    picture: "",
    text: "",
    status: false,
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // e.target.value
    // e.target.name
  };

  submitHandler = () => {
    console.log(this.state);
    Axios.post(`${URL}/items`, this.state)
      .then((res) => {
        console.log("done");
        this.setState({ status: true });
        // this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    let { name, picture, text } = this.state;

    if (this.state.status) {
      return <Redirect to="/" />;
    }

    return (
      <Container fluid>
        <Card className="text-center">
  <Card.Header>Create Profile</Card.Header>
  <Card.Body>
    <Card.Title>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Name
            </Form.Label>
            <Col sm="10">
            <Form.Control
              name="name"
              value={name}
              placeholder="Name"
              onChange={this.changeHandler}
            />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
            Image
            </Form.Label>
            <Col sm="10">
            <Form.Control
              name="picture"
              value={picture}
              placeholder="Picture"
              onChange={this.changeHandler}
            />
            </Col>
            </Form.Group>
          <Form.Group as={Row} controlId="formPlaintextEmail">
            <Form.Label column sm="2">
            Profession
            </Form.Label>
            <Col sm="10">
            <Form.Control
              name="text"
              value={text}
              placeholder="E.g. Soccer Coach"
              onChange={this.changeHandler}
            />
            </Col>
          </Form.Group>
    </Card.Title>
    <Button variant="primary" onClick={this.submitHandler}>Submit</Button>
  </Card.Body>
</Card>
      </Container >
    );
  }
}

// export default withRouter(AddItem);

export default AddItem;