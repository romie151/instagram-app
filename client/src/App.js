import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios"
import './App.css';
import phone from "./images/phone.jpeg"
import Login from "./components/Login"


class App extends Component {
  constructor() {
    super()
    this.state = { email: "", fullname: "", username: "", password: "" }
  };

  handleEmail = e => {
    this.setState({
      email: e.target.value
    })
  };

  handleFullName = e => {
    this.setState({
      fullname: e.target.value
    })
  };

  handleUserName = e => {
    this.setState({
      username: e.target.value
    })
  };

  handlePassword = e => {
    this.setState({
      password: e.target.value
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;

    if (username.length < 6) {
      this.setState({
        message: "Username length must be at least 6"
      });
      return;
    }

    axios
      .post("/users/new", {
        username: username,
        password: password
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          username: "",
          password: "",
          message: "Inserted User"
        });
      })
      .catch(err => {
        console.log("error: ", err);
        this.setState({
          username: "",
          password: "",
          message: "Error inserting user"
        });
      });
  };

  homepage = () => {
    return <div>
      <div className="homePhoto"><img src={phone} alt="phones" width="" height="618px" /></div>
      <div id="container">
        <div>
          <h1 id="homepageTitle">Instagram</h1>
        </div>
        <form>
          <input type="email" placeholder="E-Mail" onChange={this.handleEmail} ></input>
          <input type="text" placeholder="Full Name" onChange={this.handleFullName} ></input>
          <input type="text" placeholder="Username" onChange={this.handleUserName} ></input>
          <input type="password" placeholder="Password" onChange={this.handlePassword} ></input>
          <input type="submit" id="submit" onClick={this.handleSubmit} ></input>
        </form>
        <div id="or">OR</div>
        <div id="login">
          <form>
          <button type="submit" id="Login"><Link to="/login">Log In</Link></button>
          </form>
        </div>
      </div>
    </div>
  };

  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/profile"> Profile </Link> {"  "}
        </nav>
        <Switch>
          <Route exact path="/" render={this.homepage} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  };
};
export default App;