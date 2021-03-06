import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../components/Header";

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => {
        return isAuthenticated ? (
          <div>
            <Header />
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.authentication.uid,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
