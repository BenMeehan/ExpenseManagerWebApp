import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Dashboard from "../components/Dashboard";
import Edit from "../components/Edit";
import Create from "../components/Create";
import Help from "../components/Help";
import Header from "../components/Header";
import NotFound from "../components/NotFound";
import Login from "../components/Login";

export const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      {window.location.pathname !== "/" ? <Header /> : null}
      <Switch>
        <Route path="/" component={Login} exact={true} />
        <Route path="/dashboard" component={Dashboard} exact={true} />
        <Route path="/create" component={Create} exact={true} />
        <Route path="/edit/:id" component={Edit} exact={true} />
        <Route path="/help" component={Help} exact={true} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
