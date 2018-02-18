import React from "react";
import "./App.css";
import axios from "axios"
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router"

import RegisterComponent from "./components/RegisterComponent"
import LoginComponent from './components/LoginComponent'
import UserProfile from "./containers/UserProfile"


class App extends React.Component {
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
    this.setState({ userStatus: str })
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
    const { userStatus } = this.state;
    this.state.userStatus = '';
    if (userStatus === 'login') {
      return <Redirect to='/login' />
    }
    else if (userStatus === 'register' ) {
      return <Redirect to='/register' /> 
    }
    else if (userStatus === 'success') {
      return <Redirect to='/user' />
    }

    return (
      <Switch>
        <Route exact path="/" render={this.handleHome} />
        <Route path="/register" render={this.renderRegister} />
        <Route path="/login" render={this.renderLogin} />
        <Route path="/user" component={UserProfile} />
      </Switch>
    )
  }
}

export default App;