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

  componentWillMount() {
    console.log(this.props.imgid)
    axios
      .get(`/users/getsingleimageinfo/${this.props.imgid}`)
      .then(res => {
        console.log(res.data.data);
        this.setState({ imgData: [...res.data.data] })
      })
      .catch(err => {
        this.setState({ message: 'error fetching images.'})
      });  
  }

  render() {
    const { imgData } = this.state;
    if (imgData[0]) {
      return (
        <div>
          <img src={imgData[0].img_url} alt='something' />
        </div>
      )
    } else {
      return (
        <p>loading picture</p>
      )
    }
  }
}

export default UserProfile;