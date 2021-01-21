import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PublicRoute = ({ isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => {
        return isAuthenticated ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
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

export default connect(mapStateToProps)(PublicRoute);
