import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import expenseReducer from "../reducers/expense";
import filtersReducer from "../reducers/filters";
import authenticationReducer from "../reducers/authentication";

//Store

const getStore = () => {
  const store = createStore(
    combineReducers({
      expense: expenseReducer,
      filters: filtersReducer,
      authentication: authenticationReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default getStore;
