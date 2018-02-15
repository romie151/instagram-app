import React from "react";
import axios from "axios"
import { Redirect } from 'react-router'
import { Route, Link, Switch } from "react-router-dom";



class UserProfile extends React.Component {
  constructor() {
    super();

  }

  componentDidMount() {
    axios
      .get("/users/getcurrentuser")
      .then(res => {
        console.log('data: ', res.data)
      })
      .catch(err => {
        console.log('err: ', err)
      });  
  }

  render() {
  	return (
  		<div>userprofile</div>
  	)
  }
    
}

export default UserProfile;