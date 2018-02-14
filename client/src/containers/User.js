import React from "react";
import axios from "axios"
import { Redirect } from 'react-router'


import RegisterComponent from "../components/RegisterComponent"

import LoginComponent from '../components/Login'


class User extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      full_name: '',
      username: '',
      password: '',
      loggedIn: false
    }
  }

  handleFormInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLoginFormSubmit = (e = false) => {
    if(e) {
      e.preventDefault();
    }

    console.log('handleLoginFormSubmitabcdefghij')

    const { username, password } = this.state;
    axios
      .post("/users/login", {
        username: username,
        password: password
      })
      .then(res => {
        console.log('logged in')
        this.setState({
          loggedIn: true
        });
      })
      .catch(err => {
        console.log('err logging in')
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
        this.handleLoginFormSubmit();
      })
      .catch(err => {
        console.log('err register')
        this.setState({
          username: "",
          password: "",
          message: "Error inserting user"
        });
      });  
  }

  render() {
    const { loggedIn } = this.state;
    console.log(this.state)
    if (loggedIn === false) {
      return (
        <RegisterComponent
          handleFormInput={this.handleFormInput}
          handleFormSubmit={this.handleRegisterFormSubmit}
        />
      );
    } else {
      return (<div>loggedin</div>)
    }
  }
}

export default User;