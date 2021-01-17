import { createStore, combineReducers } from "redux";
import expenseReducer from "../reducers/expense";
import filtersReducer from "../reducers/filters";

//Store

const getStore = () => {
  const store = createStore(
    combineReducers({
      expense: expenseReducer,
      filters: filtersReducer,
    })
  );
  return store;
};

export default getStore;
