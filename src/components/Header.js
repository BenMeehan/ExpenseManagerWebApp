import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/authentication";

import {
  Heading,
  Link,
  Spacer,
  Square,
  Stack,
  Button,
  Box,
} from "@chakra-ui/react";

const Header = (props) => {
  return (
    <Box borderBottom="1px" borderBottomWidth="5px" borderColor="orange.500">
      <Stack
        direction={["column", "row"]}
        spacing="24px"
        px="5%"
        py="2%"
        colorScheme="blue"
      >
        <Square>
          <Heading as="h1" size="3xl">
            Budget
          </Heading>
        </Square>
        <Square pt="2%" px="2%">
          <Link color="teal.500">
            <NavLink to="/dashboard" activeClassName="is-active" exact={true}>
              Home
            </NavLink>
          </Link>
        </Square>
        <Square pt="2%">
          <Link color="teal.500">
            <NavLink to="/create" activeClassName="is-active">
              Create
            </NavLink>
          </Link>
        </Square>
        <Spacer />
        <Square>
          <Button
            onClick={() => {
              props.startLogout();
            }}
            colorScheme="pink"
          >
            Logout
          </Button>
        </Square>
      </Stack>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLogout: dispatch(startLogout),
  };
};

export default connect(undefined, mapDispatchToProps)(Header);
