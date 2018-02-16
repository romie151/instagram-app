import React from "react";
import image from "../images/phone.jpeg"

const LoginComponent = ({ handleFormInput, handleLoginFormSubmit, handleToggleBtn }) => {
  return (
    <div>
    <img src={image} className="img"/>
      <div id="container">
      <div id="containerContent">
        <div>
          <img id="homepageTitle" src="https://fontmeme.com/images/instagram-new-logo.png" />
        </div>
        <br/>
        <br/>
        <br/>
        <h1 id="tagline"> Sign in to see photos and videos from your friends. </h1> 
        <form onSubmit={handleLoginFormSubmit}>
        <input type="text" placeholder="Username" onChange={handleFormInput} name='username' ></input>
        <input type="password" placeholder="Password" onChange={handleFormInput} name='password'></input>
        <input type="submit" id="submit" value='Login'></input>
      </form>
        </div>
      </div>
      <div className="logincontainer">
      <div id="or">
      <h4 id="haveaccount"> Don't have an account? </h4>
      <div id="login">
      <button type="submit" id="Login" onClick={() => handleToggleBtn('register')}>Sign Up</button>
  </div>
          </div>
          </div>
    </div>
  )
}

export default LoginComponent;

    
// <div>
// <div id="container">
//   <div>
//     <h1 id="homepageTitle">Instagram</h1>
//   </div>

//   <div id="or">OR</div>
  // <div id="login">
  //     <button type="submit" onClick={() => handleToggleBtn('register')}>Register</button>
  // </div>
// </div>
// </div>