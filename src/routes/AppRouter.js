import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "../components/Dashboard";
import Edit from "../components/Edit";
import Create from "../components/Create";
import Help from "../components/Help";
import Header from "../components/Header";
import NotFound from "../components/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/create" component={Create} exact={true} />
        <Route path="/edit/:id" component={Edit} exact={true} />
        <Route path="/help" component={Help} exact={true} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
