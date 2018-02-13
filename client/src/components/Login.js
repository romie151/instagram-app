import React from "react";
import axios from "axios";
import { Redirect } from "react-router";
import images from "../images/phone.jpeg"

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    message: "",
    loggedIn: false
  };

  handleUserName = e => {
    this.setState({
      username: e.target.value
    });
  };

  handlePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  submitForm = e => {
    e.preventDefault();
    const { username, password } = this.state;

    if (username.length < 6) {
      this.setState({
        message: "Username length must be at least 6"
      });
      return;
    }
    axios
      .post("/users/login", {
        username: username,
        password: password
      })
      .then(res => {
        this.props.setUser(res.data);
        this.setState({
          loggedIn: true
        });
      })
      .catch(err => {
        this.setState({
          username: "",
          password: "",
          message: "username/password not found"
        });
      });
  };

  render() {
    const { username, password, message, loggedIn } = this.state;
    console.log(this.state)
    if (loggedIn) {
      return <Redirect to="/profile" />;
    }

    return (
     <div>
      <div id="homePhoto"><img src={images} alt="phones photo" width="" height="618px"/></div>
        <div id="container">
          <div>
            <h1 id="homepageTitle">Instagram</h1>
          </div>
          <form>
            <input type="text" placeholder="Username" onChange={this.handleUserName} ></input>
            <input type="password" placeholder="Password" onChange={this.handlePassword} ></input>
            <input type="submit" id="submit" onClick={this.handleSubmit} ></input>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
