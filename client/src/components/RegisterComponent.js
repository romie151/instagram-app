import React from "react";


import { Link } from "react-router-dom";






const RegisterComponent = ({ handleFormInput, handleFormSubmit}) => {
  return (
    <div>
      <div className="homePhoto"><img src='' alt="phones" width="" height="618px" /></div>
      <div id="container">
        <div>
          <h1 id="homepageTitle">Instagram</h1>
        </div>
        <form onSubmit={handleFormSubmit}>
          <input type="text" placeholder="E-Mail" onChange={handleFormInput} name='email' ></input>
          <input type="text" placeholder="Full Name" onChange={handleFormInput} name='full_name' ></input>
          <input type="text" placeholder="Username" onChange={handleFormInput} name='username'></input>
          <input type="password" placeholder="Password" onChange={handleFormInput} name='password'></input>
          <input type="submit" value="Register"></input>
        </form>
        <div id="or">OR</div>
        <div id="login">
          <form>
          <button type="submit" id="Login"><Link to="/login">Log In</Link></button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterComponent