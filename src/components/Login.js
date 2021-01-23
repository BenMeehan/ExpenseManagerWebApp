import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/authentication";

import { Button, Center } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";

const Login = (props) => {
  return (
    <Center h={document.documentElement.clientHeight}>
      <Button
        onClick={() => {
          props.startLogin();
        }}
        leftIcon={<FaGoogle />}
        colorScheme="red"
        variant="outline"
        size="lg"
        mx="auto"
        my="0"
      >
        Login
      </Button>
    </Center>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLogin: dispatch(startLogin),
  };
};

export default connect(undefined, mapDispatchToProps)(Login);
