import React from "react";
import axios from "axios"
import { Redirect } from 'react-router'
import { Route, Link, Switch } from "react-router-dom";

import ImageListComponent from "../components/ImageListComponent"
import SingleImage from "./SingleImage"

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

  renderImage = props => {
    const { imgid } = props.match.params;
    return <SingleImage imgid={imgid} />
  }


  render() {
    return (
      <Switch>
        <Route exact path='/user' component={() => <ImageListComponent userData={this.state.userData} />} />
        <Route path='/user/:imgid' render={this.renderImage} />
      </Switch>
    )
  } 
}

export default UserProfile;