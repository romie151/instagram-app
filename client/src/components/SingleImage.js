import React from "react";
import axios from "axios"

import SingleImageComponent from "../components/SingleImageComponent"

class UserProfile extends React.Component {
  constructor() {
    super();

    this.state = {
      imgData: ''
    }
  }

  componentDidMount() {
    axios
      .get(`/users/getsingleimageinfo/${this.props.imgid}`)
      .then(res => {
        this.setState({ imgData: [...res.data.data] })
      })
      .catch(err => {
        this.setState({ message: 'error fetching images.'})
      });  
  }

  render() {
    return (
      <SingleImageComponent imgData={this.state.imgData} />
    )
  } 
}

export default UserProfile;