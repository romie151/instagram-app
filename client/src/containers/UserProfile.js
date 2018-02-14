import React from "react";
import axios from "axios"
import { Redirect } from 'react-router'
import { Route, Link, Switch } from "react-router-dom";



class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.state
  }

  render() {
  	console.log(this.state)
  	return (
  		<div>userprofile</div>
  	)
  }
    
}

export default UserProfile;