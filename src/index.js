import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { firebase } from "./firebase/Firebase";
import { history } from "./routes/AppRouter";

import App from "./App";
import getStore from "./store/storeConfig";
import { startSetExpense } from "./actions/expense";

import { login, logout } from "./actions/authentication";

const store = getStore();

ReactDOM.render(<p>Loading</p>, document.getElementById("root"));

let hasRendered = false;

const render = () => {
  if (!hasRendered) {
    store.dispatch(startSetExpense()).then(() => {
      ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById("root")
      );
    });
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("login");
    store.dispatch(login(user.uid));
    render();
    if (history.location.pathname === "/") {
      history.push("/dashboard");
    }
  } else {
    console.log("logout");
    store.dispatch(logout());
    render();
    history.push("/");
  }
});
