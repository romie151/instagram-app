import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="homePhoto">Photo</div>
        <div id="container">
          <h1 id="homepageTitle">Instagram</h1>
          <input type="text" placeholder="E-Mail"></input>
          <input type="text" placeholder="Full Name"></input>
          <input type="text" placeholder="User Name"></input>
          <input type="text" placeholder="Password"></input>
          <input type="submit" id="submit"></input>

        </div>
      </div>
    );
  }
}

export default App;

{/* <nav className="App-nav">
<div id="title">
  <h1 id="instagram">Instagram</h1>
</div>
<div id="search">
  <input type="text" placeholder="Search"></input>
</div>
<button type="button" id="signIn">Sign In/Log In</button>
</nav> */}