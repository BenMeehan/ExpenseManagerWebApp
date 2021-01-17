var date = new Date();
var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

//Filter Reducer
const filtersDefaultState = {
  text: "",
  sortBy: "date",
  startDate: firstDay,
  endDate: lastDay,
};

const filtersReducer = (state = filtersDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT":
      return {
        ...state,
        text: action.newText,
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.date,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.date,
      };
    default:
      return state;
  }
};

export default filtersReducer;
