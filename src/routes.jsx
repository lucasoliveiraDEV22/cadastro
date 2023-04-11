import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./containers/Home"
import Users from "./containers/Users"

function Routes(){
    <Router>
        <Route path = "/" component = {Home} />
        <Route path = "/usuarios" component = {Users} />
    </Router>
}

export default Routes