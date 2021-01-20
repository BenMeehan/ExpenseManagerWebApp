import { createStore, combineReducers, applyMiddleware } from "redux";
import expenseReducer from "../reducers/expense";
import filtersReducer from "../reducers/filters";
import thunk from "redux-thunk";

//Store

const getStore = () => {
  const store = createStore(
    combineReducers({
      expense: expenseReducer,
      filters: filtersReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default getStore;
