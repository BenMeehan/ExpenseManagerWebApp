import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/authentication";

const Header = (props) => {
  return (
    <div>
      <header>Budget</header>
      <NavLink to="/dashboard" activeClassName="is-active" exact={true}>
        Home
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        Create
      </NavLink>
      <button
        onClick={() => {
          props.startLogout();
        }}
      >
        Logout
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLogout: dispatch(startLogout),
  };
};

export default connect(undefined, mapDispatchToProps)(Header);
