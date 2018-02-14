import React from "react";

const RegisterComponent = ({ handleFormInput, handleRegisterFormSubmit, handleToggleBtn }) => {
  return (
    <div>
      <div id="container">
        <div>
          <h1 id="homepageTitle">Instagram</h1>
        </div>
        <form onSubmit={handleRegisterFormSubmit}>
          <input type="text" placeholder="E-Mail" onChange={handleFormInput} name='email' ></input>
          <input type="text" placeholder="Full Name" onChange={handleFormInput} name='full_name' ></input>
          <input type="text" placeholder="Username" onChange={handleFormInput} name='username'></input>
          <input type="password" placeholder="Password" onChange={handleFormInput} name='password'></input>
          <input type="submit" value="Register"></input>
        </form>
        <div id="or">OR</div>
        <div id="login">
          <button type="submit" id="Login" onClick={() => handleToggleBtn('login')}>Log In</button>
        </div>
      </div>
    </div>
  )
}

export default RegisterComponent