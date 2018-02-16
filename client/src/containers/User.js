import React from "react";
import axios from "axios"
import { Redirect, Route, Switch } from "react-router-dom";

import RegisterComponent from "../components/RegisterComponent"
import LoginComponent from '../components/LoginComponent'
import UserProfile from "./UserProfile"


class User extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      full_name: '',
      username: '',
      password: '',
      userStatus: 'register'
    }
  }

  componentWillMount() {
    this.setState({
      userStatus: ''
    })
  }

  handleFormInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLoginFormSubmit = e => {
    e.preventDefault();

    const { username, password } = this.state;
    axios
      .post("/users/login", {
        username: username,
        password: password
      })
      .then(res => {
        this.setState({
          userStatus: 'success'
        });
        <Redirect to='/user' />
      })
      .catch(err => {
        this.setState({
          username: "",
          password: "",
          message: `Error logging in.  Error message: ${err}`
        });
      });  
  }

  handleRegisterFormSubmit = e => {
    e.preventDefault();

    const { username, password, full_name, email } = this.state;
    axios
      .post("/users/new", { username, password, full_name, email })
      .then(res => {
        axios
          .post("/users/login", { username, password })
          .then(res => {
            this.setState({
              userStatus: 'success'
            })
          })
          .catch(err => {
            this.setState({
              message: 'Created account.  Error logging in'
            })
          }) 
      })
      .catch(err => {
        this.setState({
          username: "",
          password: "",
          message: "Error inserting user"
        });
      });  
  }

  // handles register/login toggle
  handleToggleBtn = str => {
    this.setState({
      userStatus: str
    })
  }

  renderLogin = () => {
    return <LoginComponent 
            handleFormInput={this.handleFormInput}
            handleLoginFormSubmit={this.handleLoginFormSubmit}
            handleToggleBtn={this.handleToggleBtn}
          />  
  }

  renderRegister = () => {
    return <RegisterComponent
            handleFormInput={this.handleFormInput}
            handleRegisterFormSubmit={this.handleRegisterFormSubmit}
            handleToggleBtn={this.handleToggleBtn}
          />
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={this.renderRegister} />
        <Route path="/register" render={this.renderRegister} />
        <Route path="/login" render={this.renderLogin} />
        <Route path="/user" component={UserProfile} />
      </Switch>
    )
  }
}

export default User;