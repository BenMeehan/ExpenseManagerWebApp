import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBfSREb-nFAi7ca-dJiWFnUXpX74uIVHxo",
  authDomain: "expensemanager-cb53d.firebaseapp.com",
  databaseURL: "https://expensemanager-cb53d-default-rtdb.firebaseio.com",
  projectId: "expensemanager-cb53d",
  storageBucket: "expensemanager-cb53d.appspot.com",
  messagingSenderId: "1005637497134",
  appId: "1:1005637497134:web:c02fa99ea4c5dd657a4abf",
  measurementId: "G-WEW3385Z14",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
