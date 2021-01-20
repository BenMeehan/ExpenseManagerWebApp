import database from "../firebase/firebase";
// ADD Expense

export const addExpense = (expense) => {
  return {
    type: "ADD_EXPENSE",
    expense,
  };
};

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;

    const expense = {
      description,
      note,
      amount,
      createdAt,
    };

    database
      .ref()
      .push(expense)
      .then((ref) => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense,
          })
        );
      });
  };
};

//REMOVE Expense

export const removeExpense = ({ id }) => {
  return {
    type: "REMOVE_EXPENSE",
    id,
  };
};

// EDIT Expense
export const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    updates,
  };
};
