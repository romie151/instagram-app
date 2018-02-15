import React from "react";
import axios from "axios"
import { Redirect } from 'react-router'
import { Route, Link, Switch } from "react-router-dom";

import ImageListComponent from "../components/ImageListComponent"

class UserProfile extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      userData: [],
      loggedIn:  true
    }
  }

  componentDidMount() {
    axios
      .get("/users/getcurrentuser")
      .then(res => {
        this.setState({ userData: [...res.data.data] })
      })
      .catch(err => {
        this.setState({ message: 'error fetching user images.'})
      });  
  }

  render() {
  	return (
  		<ImageListComponent userData={this.state.userData}/>
  	)
  } 
}

export default UserProfile;