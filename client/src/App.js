import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import User from "./containers/User"
import LoginComponent from './components/LoginComponent'


const App = () => {
  return (
    <div>
      <Route exact path="/" component={User} />
      <Route path="/login" component={LoginComponent} />
    </div>
  )
}

export default App

