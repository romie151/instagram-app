import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios"
import logo from './logo.svg';
import './App.css';


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

  handleSubmit = () => {
    axios
      .get(`/new`)
      .then(res => {
        console.log("created user:", res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  homepage = () => {
    return <div>
      <div id="homePhoto"><img src="" alt="phones photo"/></div>
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
        <div id="login">
          or Log In
          {/* <Route path="/login" component={ Login }/> */}
        </div>
      </div>
    </div>
  };

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <nav>
          <Link to="/users/new">Register</Link> {"  "}
          <Link to="/users/login">Log In</Link> {"  "}
          <Link to="/users/profile"> Profile </Link> {"  "}
        </nav>
        <Switch>
          <Route exact path="/" render={this.homepage} />
          {/* <Route exact path="/" render={this.login} /> */}
          <Route path="/users" />
        </Switch>
      </div>
    );
  };
};
export default App;