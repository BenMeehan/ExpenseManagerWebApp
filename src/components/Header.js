import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>Budget</header>
      <NavLink to="/" activeClassName="is-active" exact={true}>
        Home
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        Create
      </NavLink>
    </div>
  );
};

export default Header;
