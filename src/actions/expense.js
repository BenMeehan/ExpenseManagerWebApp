import { v4 } from "uuid";

// ADD Expense

export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
}) => {
  return {
    type: "ADD_EXPENSE",
    expense: {
      id: v4(),
      description,
      note,
      amount,
      createdAt,
    },
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
