import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Dashboard from "../components/Dashboard";
import Edit from "../components/Edit";
import Create from "../components/Create";
import Help from "../components/Help";

import NotFound from "../components/NotFound";
import Login from "../components/Login";

import PrivateRoute from "./PrivateRoute";

export const history = createHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Login} exact={true} />
        <PrivateRoute path="/dashboard" component={Dashboard} exact={true} />
        <PrivateRoute path="/create" component={Create} exact={true} />
        <PrivateRoute path="/edit/:id" component={Edit} exact={true} />
        <Route path="/help" component={Help} exact={true} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
