import React from "react";
import { Route, Link, Switch } from "react-router-dom";


const LoginComponent = ({  }) => {

  return (
    <div>
      <div className="homePhoto"><img src='../images/phone.jpeg' alt="phones" width="" height="618px" /></div>
      <div id="container">
        <div>
          <h1 id="homepageTitle">Instagram</h1>
        </div>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" placeholder="Username" onChange={this.handleFormInputUpdate} name='username' ></input>
          <input type="password" placeholder="Password" onChange={this.handleFormInputUpdate} name='password'></input>
          <input type="submit" id="submit"></input>
        </form>
        <div id="or">OR</div>
        <div id="login">
          <form>
            <button type="submit" id="Login"><Link to="/">Sign Up</Link></button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent;
