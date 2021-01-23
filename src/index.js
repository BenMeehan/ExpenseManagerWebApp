import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { firebase } from "./firebase/Firebase";
import { history } from "./routes/AppRouter";

import App from "./App";
import getStore from "./store/storeConfig";
import { startSetExpense } from "./actions/expense";

import { login, logout } from "./actions/authentication";

import { ChakraProvider, Spinner, Center } from "@chakra-ui/react";

const store = getStore();

ReactDOM.render(
  <ChakraProvider>
    <Center h={document.documentElement.clientHeight}>
      <Spinner color="red.500" size="xl" />
    </Center>
  </ChakraProvider>,
  document.getElementById("root")
);

let hasRendered = false;

const renderContent = () => {
  if (!hasRendered) {
    ReactDOM.render(
      <Provider store={store}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Provider>,
      document.getElementById("root")
    );
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpense()).then(() => {
      renderContent();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderContent();
    history.push("/");
  }
});
