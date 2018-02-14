import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import User from "./containers/User"

const App = () => {
  return (
    <div>
      <Route path="/" component={User} />
    </div>
  )
}

export default App

