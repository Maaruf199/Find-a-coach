import React, { Component } from "react";
import { Form, Button, Row } from "react-bootstrap";
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
      <div>
        <h1>Create Appointment</h1>
        <div>
          <Row>
            <Form.Control
              name="name"
              value={name}
              placeholder="name"
              onChange={this.changeHandler}
            />
          </Row>
          <Row>
            <Form.Control
              name="picture"
              value={picture}
              placeholder="picture"
              onChange={this.changeHandler}
            />
          </Row>
          <Row>
            <Form.Control
              name="text"
              value={text}
              placeholder="text"
              onChange={this.changeHandler}
            />
          </Row>
          <Button onClick={this.submitHandler}>Submit</Button>
        </div>
      </div>
    );
  }
}

// export default withRouter(AddItem);

export default AddItem;