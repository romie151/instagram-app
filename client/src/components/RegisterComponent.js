import React from "react";
import phoneimage1 from "../images/phone.jpeg"
import phoneimage2 from "../images/phoneimage2.png"
import phoneimage3 from "../images/phoneimage3.png"
import phoneimage4 from "../images/phoneimage4.png"
import phoneimage5 from "../images/phoneimage5.png"

import { Fade } from 'react-slideshow-image';


const RegisterComponent = ({ handleFormInput, handleRegisterFormSubmit, handleToggleBtn }) => {
// const images = [
//   '../images/phone.jpeg',
//   '../images/phoneimage2.png',
//   '../images/phoneimage3.png',
//   '../images/phoneimage4.png',
//   '../images/phoneimage5.png',
// ];

// const Slideshow = () => {
//   return (
//       <Fade
//         images={images}
//         duration="5000"
//         transitionDuration="1000"
//       />
//   )
// }
  return (
    <div>

    <img src={phoneimage1} className="img"/>
      <div id="container">
      <div id="containerContent">
        <div>
          <img id="homepageTitle" src="https://fontmeme.com/images/instagram-new-logo.png" />
        </div>
        <br/>
        <br/>
        <br/>
        <h1 id="tagline"> Sign up to see photos and videos from your friends. </h1> 
        <form onSubmit={handleRegisterFormSubmit}>
          <input className="input" type="text" placeholder="E-Mail" onChange={handleFormInput} name='email' ></input>
          <input className="input" type="text" placeholder="Full Name" onChange={handleFormInput} name='full_name' ></input>
          <input className="input" type="text" placeholder="Username" onChange={handleFormInput} name='username'></input>
          <input className="input" type="password" placeholder="Password" onChange={handleFormInput} name='password'></input>
          <input className="signup" type="submit" value="Sign Up"></input>
        </form>
        </div>
      </div>
      <div className="logincontainer">
      <div id="or">
      <h4 id="haveaccount"> Have an account? </h4>
        <div id="login">
          <button type="submit" id="Login" onClick={() => handleToggleBtn('login')}>Log In</button>
          </div>
          </div>
          </div>
    </div>
  )
}

export default RegisterComponent

// <img className="mySlides" src={phoneimage1} />
// <img className="mySlides" src={phoneimage2} />
// <img className="mySlides" src={phoneimage3} />
// <img className="mySlides" src={phoneimage4} />