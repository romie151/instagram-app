import React from "react";

const LoginComponent = ({ handleFormInput, handleLoginFormSubmit, handleToggleBtn }) => {
  return (
    <div>
      <div id="container">
        <div>
          <h1 id="homepageTitle">Instagram</h1>
        </div>
        <form onSubmit={handleLoginFormSubmit}>
          <input type="text" placeholder="Username" onChange={handleFormInput} name='username' ></input>
          <input type="password" placeholder="Password" onChange={handleFormInput} name='password'></input>
          <input type="submit" id="submit" value='Login'></input>
        </form>
        <div id="or">OR</div>
        <div id="login">
            <button type="submit" onClick={() => handleToggleBtn('register')}>Register</button>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent;
