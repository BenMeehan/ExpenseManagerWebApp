import { firebase, googleAuthProvider } from "../firebase/Firebase";

export const startLogin = () => {
  return () => {
    firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLogout = () => {
  return () => {
    firebase.auth().signOut();
  };
};

export const login = (uid) => {
  return {
    type: "LOGIN",
    uid,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
