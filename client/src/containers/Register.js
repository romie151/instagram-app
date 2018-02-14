import React from "react";
import RegisterComponent from "../components/RegisterComponent"
import callAxios from "../helperFunctions"
import { Redirect } from 'react-router'
import User from './User'
import Login from '../components/Login'



import axios from "axios"
class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      full_name: '',
      username: '',
      password: '',
    }
  }

  handleFormInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFormSubmitWORKING = e => {
    const { username, password } = this.state;
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
  }

  handleFormSubmit = e => {
    e.preventDefault();
    const { username, password, full_name, email } = this.state;
    axios
      .post("/users/new", { username, password, full_name, email })
      .then(res => {
        console.log('registered')
        axios
          .post("/users/login", {
            username: username,
            password: password
          })
          .then(res => {
            console.log('logged in')
            return <User axiosData={{ status: 'success', body: res.data }} />
          })
          .catch(err => (
            <User axiosData={{ status: 'error', body: err }} />
          ))
      })
      .catch(err => {
        console.log("error: ", err);
        this.setState({
          username: "",
          password: "",
          message: "Error inserting user"
        });
      });  
  }

  render() {
    return (
      <RegisterComponent
        handleFormInput={this.handleFormInput}
        handleFormSubmit={this.handleFormSubmit}
      />
    )
  }
}

export default Register;