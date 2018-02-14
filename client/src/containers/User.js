import React from "react";
import axios from "axios"

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


  render() {
    const { userStatus } = this.state;
    if (userStatus === 'register') {
      return (
        <RegisterComponent
          handleFormInput={this.handleFormInput}
          handleRegisterFormSubmit={this.handleRegisterFormSubmit}
          handleToggleBtn={this.handleToggleBtn}
        />
      );
    } else if (userStatus === 'login') {
      return (
        <LoginComponent
          handleFormInput={this.handleFormInput}
          handleLoginFormSubmit={this.handleLoginFormSubmit}
          handleToggleBtn={this.handleToggleBtn}
        />
      )
    } else {
      return (
        <div> logged in do something here </div>
      )
    }
  }
}

export default User;