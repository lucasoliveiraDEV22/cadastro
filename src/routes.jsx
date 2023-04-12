import React from "react";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
} from "react-router-dom";

import { Switch } from 'react-router-dom'

import Home from "./containers/Home";
import Users from "./containers/Users";

function Routes() {
  <BrowserRouter>
    <Switch>
     
        <Route element={<Home />} path="/" exact />
        <Route element={<Users />} path="/usuarios" exact />
     
    </Switch>
  </BrowserRouter>;
}

export default Routes;
